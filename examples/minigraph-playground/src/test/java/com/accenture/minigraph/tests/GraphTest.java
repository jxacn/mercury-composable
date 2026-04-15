/*

    Copyright 2018-2026 Accenture Technology

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

 */

package com.accenture.minigraph.tests;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.platformlambda.core.models.AsyncHttpRequest;
import org.platformlambda.core.models.EventEnvelope;
import org.platformlambda.core.system.AppStarter;
import org.platformlambda.core.system.PostOffice;
import org.platformlambda.core.util.AppConfigReader;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * Just some examples to show how to do unit test to evaluate graph models
 */
class GraphTest {
    private static final Logger log = LoggerFactory.getLogger(GraphTest.class);
    private static final long TIMEOUT = 5000;
    private static String target;

    @BeforeAll
    static void beforeAll() {
        AppStarter.main(new String[0]);
        var config = AppConfigReader.getInstance();
        target = "http://127.0.0.1:"+config.getProperty("rest.server.port");
    }

    @Test
    void tutorial1() throws TimeoutException {
        var result = runTutorial(1, Map.of());
        assertEquals("hello world", result);
        log.info("Tutorial 1 works");
    }

    @Test
    void tutorial2() throws TimeoutException {
        var result = runTutorial(2, Map.of("hello", "world"));
        assertEquals(Map.of("hello", "world"), result);
        log.info("Tutorial 2 works");
    }

    @Test
    void tutorial3() throws TimeoutException {
        var result = runTutorial(3, Map.of("person_id", 100));
        assertEquals(Map.of("name", "Peter", "address", "100 World Blvd"), result);
        log.info("Tutorial 3 works");
    }

    private Object runTutorial(int chapter, Map<String, Object> input) throws TimeoutException {
        var request = new AsyncHttpRequest().setMethod(input.isEmpty()? "GET" : "POST").setTargetHost(target);
        if (!input.isEmpty()) {
            request.setBody(input).setHeader("Content-Type", "application/json");
        }
        request.setHeader("Accept", "application/json");
        request.setUrl("/api/graph/tutorial-"+chapter);
        var event = new EventEnvelope().setTo("async.http.request").setBody(request);
        var po = PostOffice.trackable("unit.test", "ch-"+chapter, "TEST /chapter/"+chapter);
        var response = po.asyncRequest(event, TIMEOUT).await(TIMEOUT, TimeUnit.MILLISECONDS);
        if (response.hasError()) {
            log.error("HTTP-{} - {}", response.getStatus(), response.getBody());
        }
        return response.getBody();
    }
}
