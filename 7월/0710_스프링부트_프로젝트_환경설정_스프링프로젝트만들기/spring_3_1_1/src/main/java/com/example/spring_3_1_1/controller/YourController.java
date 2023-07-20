package com.example.spring_3_1_1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class YourController {
    
    //로그인
    @GetMapping("/login.do")
    public String loginMethod(Model model){
        model.addAttribute("yourName","방문자");
        return "login";
    }
    
    //로그아웃
    @GetMapping("/logout.do")
    public String logoutMethod(Model model){
        model.addAttribute("yourName","방문자");
        return "logout";
    }
}
