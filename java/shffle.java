import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
public class Main
{
	public static void main(String[] args) {
		int[] arr={1,2,3,4,5,6,7};
		List<Integer>ans=new ArrayList<>();
		for(int a:arr){
		    ans.add(a);
		}
		Collections.shuffle(ans);
		for(int a:ans){
		    System.out.print(a+" ");
		}
		
	}
}