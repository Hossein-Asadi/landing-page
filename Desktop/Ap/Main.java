
public class Main {
    public static void main(String[] args) {
        // create objects _ Student class
        Student std1 = new Student("James","Gosling","0987654");
        Student std2 = new Student("Dennis","Ritchie","1234567");

        // set grades student
        std1.setGrade(18);
        std2.setGrade(17.5);
        //print info
        std1.printStudenInfo();
        std2.printStudenInfo();
        // create object _ lab class
        Lab lab = new Lab("Mr.Smith","Monday",30);
        lab.enrollStudent(std1);
        lab.enrollStudent(std2);
        Student[] students = {std2 , std1};
        lab.setStudents(students);
        lab.printLabInfo();
    }
}
