package com.example.app.controller;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@AllArgsConstructor // 모든생성자
@NoArgsConstructor // public 기본생성자(){
@ToString

public class UserDTOEntity {
    // 폼데이터 속성들 가져온다.
    // 가져온 폼 요소 속성들을 칸(열 컬럼 Column)을 할당한다.
    // 식별자가 유일성
    @Id
    @GeneratedValue // 자동 증가 번호 할당
    private Long id;
    @Column
    private String userName;
    @Column
    private String userHp;
    @Column
    private String userEmail;
    @Column
    private String userSubject;
    @Column
    private String userContent;

    // list 출력 시 반드시 필요한 기본생성자는 private사용 절대 안 됨
//    public UserDTOEntity(){}


//    public UserDTOEntity(Long id, String userName, String userHp, String userEmail, String userSubject, String userContent) {
//        this.id = id;
//        this.userName = userName;
//        this.userHp = userHp;
//        this.userEmail = userEmail;
//        this.userSubject = userSubject;
//        this.userContent = userContent;
//    }

//    @Override
//    public String toString() {
//        return "UserDTOEntity{" +
//                "id=" + id +
//                ", userName='" + userName + '\'' +
//                ", userHp='" + userHp + '\'' +
//                ", userEmail='" + userEmail + '\'' +
//                ", userSubject='" + userSubject + '\'' +
//                ", userContent='" + userContent + '\'' +
//                '}';
//    }


}
