package com.counterapp;
import androidx.annotation.NonNull;

import android.content.Context;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

 public class CalenderModule extends ReactContextBaseJavaModule {
    CalenderModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CalenderModule";
    }

     @ReactMethod
     public void createCalendarEvent(String name, String location) {
         Log.d("CalendarModule", "Create event called with name: " + name
                 + " and location: " + location);
         Toast.makeText(getReactApplicationContext(), "hhhhhhhhhhhhhhhhhhhhh", Toast.LENGTH_SHORT).show();
     }


 }