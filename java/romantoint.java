
import java.util.Scanner;
public class Main
{
    static int value(char r){
         if (r == 'I')
            return 1;
        if (r == 'V')
            return 5;
        if (r == 'X')
            return 10;
        if (r == 'L')
            return 50;
        if (r == 'C')
            return 100;
        if (r == 'D')
            return 500;
        if (r == 'M')
            return 1000;
        return -1;
    }
    static int convert(String s){
        
        int ans=0;
        
        for(int i=0;i<s.length();i++){
            int n1=value(s.charAt(i));
            if(i+1<s.length()){
                int n2=value(s.charAt(i+1));
                 if(n1>=n2)
                 ans+=n1;
                else{
                      ans+=n2-n1;
                      i++;
                }
              
            }
            else{
                  ans+=n1;
                
            }
          
        }
        return ans;
        
    }
	public static void main(String[] args) {
	    Scanner in=new Scanner(System.in);
	    String input=in.nextLine();
	    input=input.toUpperCase();
	    int ans=convert(input);
	    System.out.print(ans);
	}
}
