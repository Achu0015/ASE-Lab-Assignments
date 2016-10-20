/**
 * @author ry6d3
 *
 */
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.json.JSONException;
import org.json.JSONObject;
 
@Path("/dtohservice")
public class FtoCService {
     
	  @Path("{f}")
	  @GET
	  @Produces("application/json")
	  public Response convertFtoCfromInput(@PathParam("f") int d) throws JSONException {
			
		 // int days;
		  int hours;
		  long minutes;
		  long seconds;
		  int days=d;
		  JSONObject jsonObject = new JSONObject();
		  jsonObject.put("Days", days);
	      jsonObject.put("Hours", days*24);
	      jsonObject.put("Minutes", days*1440);
	      jsonObject.put("Seconds", days*86400);

		//float celsius;
		
		//celsius =  (f - 32)*5/9; 
		//jsonObject.put("F Value", 100); 
		//jsonObject.put("C Value", celsius);
 
		String result = "" + jsonObject;
		return Response.status(200).entity(result).build();
	  }
}