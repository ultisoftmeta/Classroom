/*
 *
 */
package com.cordovaprogramming.db;

import android.content.ContentValues;
import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

/**
 * Class for managing Records sync related mOperations
 */
public class SmartLabelSQLiteHelper extends SQLiteOpenHelper {

	public static final String TABLE_NAME = "mail_attachments";
	public static final String COLUMN_ID = "_id";
	public static final String COLUMN_FILENAME = "filename";
	public static final String COLUMN_CONTENT = "content";
	public static final String COLUMN_STATUS = "status";
	public static final String COLUMN_ATTEMPT = "attempt";
	public static final String COLUMN_MISC = "misc";

	private static final String DATABASE_NAME = "attachments.db";
	private static final int DATABASE_VERSION = 1;

	// Database creation sql statement
	private static final String DATABASE_CREATE = "create table IF NOT EXISTS " + TABLE_NAME
			+ " (" + COLUMN_ID
			+ " integer primary key autoincrement, " 
			+ COLUMN_FILENAME
			+ " text not null, " 
			+ COLUMN_CONTENT 
			+ " text not null, "
			+ COLUMN_STATUS 
			+ " text , "
			+ COLUMN_ATTEMPT 
			+ " text , "
			+ COLUMN_MISC 
			+ " text "
			+");";

	public SmartLabelSQLiteHelper(Context context) {
		super(context, DATABASE_NAME, null, DATABASE_VERSION);
	}

	// Creating Tables
	@Override
	public void onCreate(SQLiteDatabase database) {
		database.execSQL(DATABASE_CREATE);

	}

	// Upgrading database
	@Override
	public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

	}

	public void writeToDB(String fileName, String dataString) {
	    	ContentValues values = new ContentValues();
	    	values.put(COLUMN_FILENAME, fileName);
	    	values.put(COLUMN_CONTENT, dataString);
	    	
	    	this.getWritableDatabase().insertOrThrow(TABLE_NAME, null, values);
	    	
			
		}
}
