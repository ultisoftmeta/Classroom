package com.smartLabel.utility;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import android.os.Environment;
import android.util.Log;
public class FileUtils {
	public static void write(String fileName, String data) {
		File root = Environment.getExternalStorageDirectory();
		File file = new File(root, fileName);
		if (data.length() > 0) {
			try {
				if (root.canWrite()) {
					FileWriter filewriter = new FileWriter(file, true);
					BufferedWriter out = new BufferedWriter(filewriter);
					out.write(data);
					out.close();
				}
			} catch (IOException e) {
				Log.e("TAG", "Could not write file " + e.getMessage());
			}
		}
	}
}
