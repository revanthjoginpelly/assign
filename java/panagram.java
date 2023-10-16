import java.util.Scanner;
public class Main
{
	public static void main(String[] args) {
	    Scanner in=new Scanner(System.in);
	    String input=in.nextLine();
	    input=input.toLowerCase();
	    boolean ans=true;
	    for(char c='a';c<='z';c++){
	        if(input.indexOf(c)==-1){
	           ans=false;
	           break;
	        }
	    }
	    if(ans){
	        System.out.print("is panagram");
	    }
	    else{
	        System.out.print("not panagram");
	    }
	}
}