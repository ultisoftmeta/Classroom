/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.classroom.knomadix;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import org.apache.cordova.Config;
import org.apache.cordova.CordovaActivity;

import android.content.ContentResolver;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;

import com.cordovaprogramming.db.SmartLabelSQLiteHelper;
import android.os.Bundle;
import org.apache.cordova.*;

public class SmartLabel extends CordovaActivity 
{	private SmartLabelSQLiteHelper dbHelper;
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
    	String dataString=null;
        super.onCreate(savedInstanceState);
        super.init();
        // Set by <content src="index.html" /> in config.xml
        
        
        super.loadUrl(Config.getStartUrl());
        //super.loadUrl("file:///android_asset/www/index.html")
        Intent intent = getIntent();
		Uri uri = intent.getData();

		if (null != uri) {
			String fileName = getContentName(getContentResolver(), uri);
			
			dataString=readContent(uri);
			if(null!=dataString){
				dbHelper = new SmartLabelSQLiteHelper(this.getApplicationContext());
				dbHelper.writeToDB(fileName, dataString);
				dbHelper.close();
				
//				FileUtils.write("attachment_invoke.xml", dataString);
			}
		}
    }
    
   
    public static String getContentName(ContentResolver resolver, Uri uri){
        Cursor cursor = resolver.query(uri, null, null, null, null);
        cursor.moveToFirst();
        int nameIndex = cursor.getColumnIndex(MediaStore.MediaColumns.DISPLAY_NAME);
        if (nameIndex >= 0) {
            return cursor.getString(nameIndex);
        } else {
            return null;
        }
    }
    
	private String readContent(Uri uri) {
		String dataString=null;
		ContentResolver cr = getContentResolver();
		try {
			InputStream is = cr.openInputStream(uri);
			BufferedReader r = new BufferedReader(new InputStreamReader(is));
			StringBuilder sb = new StringBuilder();
			String line;
			while ((line = r.readLine()) != null) {
			    sb.append(line);
			}
			dataString=sb.toString();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return dataString;
	}

	
    
}

