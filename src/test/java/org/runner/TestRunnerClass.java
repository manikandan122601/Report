package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.utillities.JvmReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources", glue="org.stepdefinition", snippets=SnippetType.UNDERSCORE,
dryRun=false, plugin= {"html:target\\reports",
						"junit:target\\reports\\fbjuit.xml",
						"json:target\\reports\\output.json"}, tags = {"@smoke"})



public class TestRunnerClass extends JvmReport{
	
	@AfterClass
	public static void sampleReport() {
		generateJvmReport(System.getProperty("user.dir")+"\\target\\reports\\output.json");
	}
	

}
