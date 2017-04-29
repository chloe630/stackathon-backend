package com.chloe;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

//    @value("${net.davidtanzer.webfrontend.bundledjs}")
//    private boolean bundleJavaScript;

    @RequestMapping(value = "/")
    public String index() {
        return "index.html";
    }

}