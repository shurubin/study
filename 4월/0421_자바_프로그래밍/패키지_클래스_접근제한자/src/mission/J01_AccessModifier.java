package mission;

import mission.MissionAgent;// 패키지이름.클래스이름
import mission.Agent;

public class J01_AccessModifier {
    public static void main(String[] args) {
        
        // 생성자 생성
        MissionAgent newMissionAgent = new MissionAgent();

        newMissionAgent.setName("톰 크루즈");   // public 메소드로
        newMissionAgent.codeNum = 1203;   // public 접근제한자로서 어디서든지 접근가능하다
        
        newMissionAgent.showData();

        // 생성자 생성 Agent
        Agent newAgent = new Agent();

        newAgent.setName("안젤리나 졸리");
        newAgent.setAge(-40);

        // Agent에서 게터함수로 이름과 나이를 출력하라
        System.out.println("이름 : " + newAgent.getName());
        System.out.println("이름 : " + newAgent.getAge());

    }
}


class Agent{

    // private 멤버변수 접근지정
    // public 메서드 접긴지정

    private String name;
    private int age;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

}