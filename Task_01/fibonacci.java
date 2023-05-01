package Task_01;

import java.util.Scanner;

public class fibonacci {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int numb = s.nextInt();
        int a = 0, b = 1, c = 0;
        System.out.println(a);
        System.out.println(b);

        while (c < numb) {
            c = a + b;
            if (c < numb) {
                System.out.println(c);
            }
            a = b;
            b = c;
        }

    }
}
