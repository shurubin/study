package com.example.spring_2_713.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {
    // 로그인 페이지 메소드
    @GetMapping("/login.do")
    public String loginMethod(Model model){
//        model.addAttribute("userName","황수빈");
        model.addAttribute("userName","김도희");
        return "login";
    }

    // 로그아웃 페이지 메소드
    @GetMapping("/logout.do")
    public String logoutMethod(Model model){
        model.addAttribute("userName","김도희");
        return "logout";
    }

}
