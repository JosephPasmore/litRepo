
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

import java.io.File;
import java.io.IOException;
import java.util.Map;


public class UploadImage {


    public static void main(String[] args) {

        Map config = ObjectUtils.asMap(
                "cloud_name", "gabriel333",
                "api_key", "992668144663919",
                "api_secret", "nhx0dMBqqMyqqpgckusk_YZuQFk");
        Cloudinary cloudinary = new Cloudinary(config);

        File toUpload = new File("Venusaur.png");
        Map uploadResult = null;
        try {
            uploadResult = cloudinary.uploader().upload(toUpload, ObjectUtils.emptyMap());
        } catch (IOException e) {
            e.printStackTrace();
        }

//      Alternatively, you can a specify a local path, a public HTTP URL, an S3 URL or an actual media file's data. For example:
//      Map uploadResult = cloudinary.uploader().upload("http://www.example.com/image.jpg", ObjectUtils.emptyMap());


        System.out.println("intellij is the shit fam");
        System.out.println(uploadResult.toString());
    }
}
