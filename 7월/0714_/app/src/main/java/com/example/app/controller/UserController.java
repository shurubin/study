package com.example.app.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;

@Controller
@Slf4j  // 롬복 로깅사용 어노테이션(Simple Logging Facade for Java);
public class UserController {

    // 리파지토리 필드 생성자
    // 자동으로 실행 의존성 주입
    @Autowired
    private  UserDTOEntityRepository userDTOEntityRepository;


    @GetMapping("/writeForm.do")
    public String writeMethod(){
        return "writeForm";
    }

    @PostMapping("/view.do")
    public String viewMethod(UserDTO userDTO, Model model){

//        System.out.println( userDTO.toString() );  // console.log
        log.info( userDTO.toString() );  // console.log

        model.addAttribute("userName", userDTO.getUserName());
        model.addAttribute("userHp", userDTO.getUserHp());
        model.addAttribute("userEmail", userDTO.getUserEmail());
        model.addAttribute("userSubject", userDTO.getUserSubject());
        model.addAttribute("userContent", userDTO.getUserContent());
        
        // JPA
        // 데이터베이스에 저장가능한 형태의 데이터 엔티티를 생성한다.
        // 생성된 엔티티는 리파지토리에의해서 데이터베이스에 저장된다.
        // 1 폼데이터를 엔티티로 변환한다. => 엔티티(Entity)생성
        UserDTOEntity userDTOEntity = userDTO.toEntity();
//        System.out.println(userDTOEntity.toString());  // 1차 출력 내용 => 엔티티(Entity)
        log.info(userDTOEntity.toString());  // 1차 출력 내용 => 엔티티(Entity)
        // id=null 엔티티 이기 때문에
        
        // 데이터베이스에 저장 리파지토리가
        UserDTOEntity saved = userDTOEntityRepository.save(userDTOEntity);
//        System.out.println( saved.toString() );
        log.info( saved.toString() );
        // id=1 데이터베이스저장 할당 번호 증가
        
        return  "view";
    }

    // 글목록 ArrayList 목록 출력
    // 폼데이터(DTO) => entity = > 리파지토리(DB저장)
    // => 저장된 DB목록 => ArrayList list사용 list.do(목록출력) => 뷰 탬플릿(mustache, Thymeleaf)
    // entity => ArrayList list사용 list.do(목록출력) => 뷰 탬플릿(mustache, Thymeleaf)
    // userDTOEntityRepository 에서 모든 목록 가져오기
    @GetMapping("/list.do")
    public String list(Model model){
        // userDTOEntityRepository에서 모든 목록 가져오기
        ArrayList<UserDTOEntity> userDTOEntityList = userDTOEntityRepository.findAll();
        model.addAttribute("userList", userDTOEntityList );
        return "list";
    }
}
