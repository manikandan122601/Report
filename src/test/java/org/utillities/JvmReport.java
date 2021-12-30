package org.utillities;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;


public class JvmReport {
	
	public static void generateJvmReport(String samplejson) {
		
		File f = new File(System.getProperty("user.dir")+"\\target\\reports\\jvmReport");
		
		Configuration con = new Configuration(f, "Facebook Application");
		con.addClassifications("Browser", "Chrome");
		con.addClassifications("browser version", "97");
		con.addClassifications("platform", "window");
		
		List<String> li = new ArrayList<String>();
		li.add(samplejson);
		
		ReportBuilder r = new ReportBuilder(li, con);
		r.generateReports();

	}

}
