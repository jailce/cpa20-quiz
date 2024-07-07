/*******************************************************************************
** 
** Filename: SCOFunctions.js
**
** File Description: This file contains several JavaScript functions that are 
**                   used by the Sample SCOs contained in the Sample Course.
**                   These functions encapsulate actions that are taken when the
**                   user navigates between SCOs, or exits the Lesson.
**
** Author: ADL Technical Team
**
** Contract Number:
** Company Name: CTC
**
** Design Issues:
**
** Implementation Issues:
** Known Problems:
** Side Effects:
**
** References: ADL SCORM
**
/*******************************************************************************
**
** Concurrent Technologies Corporation (CTC) grants you ("Licensee") a non-
** exclusive, royalty free, license to use, modify and redistribute this
** software in source and binary code form, provided that i) this copyright
** notice and license appear on all copies of the software; and ii) Licensee
** does not utilize the software in a manner which is disparaging to CTC.
**
** This software is provided "AS IS," without a warranty of any kind.  ALL
** EXPRESS OR IMPLIED CONDITIONS, REPRESENTATIONS AND WARRANTIES, INCLUDING ANY
** IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-
** INFRINGEMENT, ARE HEREBY EXCLUDED.  CTC AND ITS LICENSORS SHALL NOT BE LIABLE
** FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING, MODIFYING OR
** DISTRIBUTING THE SOFTWARE OR ITS DERIVATIVES.  IN NO EVENT WILL CTC  OR ITS
** LICENSORS BE LIABLE FOR ANY LOST REVENUE, PROFIT OR DATA, OR FOR DIRECT,
** INDIRECT, SPECIAL, CONSEQUENTIAL, INCIDENTAL OR PUNITIVE DAMAGES, HOWEVER
** CAUSED AND REGARDLESS OF THE THEORY OF LIABILITY, ARISING OUT OF THE USE OF
** OR INABILITY TO USE SOFTWARE, EVEN IF CTC  HAS BEEN ADVISED OF THE
** POSSIBILITY OF SUCH DAMAGES.
*******************************************************************************/
var startDate;
var exitPageStatus;
var usuLocation;
var usuScore;
var usuData;
var flashMovie;
var suspendAtual;
var valorico;
var status;
var setMin;
var setMax;
var result;
/*
var startTime = new Date();
var startHour = startTime.getHours();
var startMinutes = startTime.getMinutes();
var startSeconds = startTime.getSeconds();*/

//Inicializa Scorm...
function loadPage() {
	result = doLMSInitialize();
	status = doLMSGetValue("cmi.core.lesson_status");
	usuLocation = doLMSGetValue("cmi.core.lesson_location");
	suspendAtual = doLMSGetValue("cmi.suspend_data");
	if (status == "not attempted") {
		// the student is now attempting the lesson
		doLMSSetValue("cmi.core.lesson_status","incomplete");
		doLMSSetValue("cmi.suspend_data","0");
		//doLMSSetValue("cmi.core.score.min","50");
		//doLMSSetValue("cmi.suspend_data","0");
		//doLMSSetValue("cmi.core.score.max","100");
		doLMSCommit();
		status = doLMSGetValue("cmi.core.lesson_status");
	}
	exitPageStatus = false;
	startTimer();
}


//Função que computa o tempo demorado para realizar o curso ou quiz
function startTimer() {
	startDate = new Date().getTime();
}

function computeTime() {
	//alert(startDate);
	if (startDate != 0 && startDate != undefined) {
		var currentDate = new Date().getTime();
		var elapsedSeconds = ((currentDate-startDate)/1000);
		var formattedTime = convertTotalSeconds(elapsedSeconds);
	} else {
		formattedTime = "00:00:00.0";
	}

	doLMSSetValue("cmi.core.session_time",formattedTime);
}

function doBack() {
	doLMSSetValue("cmi.core.exit","suspend");

	computeTime();
	exitPageStatus = true;
	var result;
	result = doLMSCommit();
	// NOTE: LMSFinish will unload the current SCO.  All processing
	//       relative to the current page must be performed prior
	// to calling LMSFinish.
	result = doLMSFinish();
}

function doContinue(status) {
	// Reinitialize Exit to blank
	doLMSSetValue("cmi.core.exit","");
	var mode = doLMSGetValue("cmi.core.lesson_mode");
	if (mode != "review" && mode != "browse") {
		doLMSSetValue("cmi.core.lesson_status",status);
	}
	computeTime();
	exitPageStatus = true;
	var result;
	result = doLMSCommit();
	// NOTE: LMSFinish will unload the current SCO.  All processing
	//       relative to the current page must be performed prior
	// to calling LMSFinish.   
	result = doLMSFinish();
}

function doQuit() {
	computeTime();
	doLMSSetValue("cmi.core.exit","logout");
	exitPageStatus = true;
	var result;
	result = doLMSCommit();
	// NOTE: LMSFinish will unload the current SCO.  All processing
	//       relative to the current page must be performed prior
	// to calling LMSFinish.   
	result = doLMSFinish();
}

/*******************************************************************************
** The purpose of this function is to handle cases where the current SCO may be 
** unloaded via some user action other than using the navigation controls 
** embedded in the content.   This function will be called every time an SCO
** is unloaded.  If the user has caused the page to be unloaded through the
** preferred SCO control mechanisms, the value of the "exitPageStatus" var
** will be true so we'll just allow the page to be unloaded.   If the value
** of "exitPageStatus" is false, we know the user caused to the page to be
** unloaded through use of some other mechanism... most likely the back
** button on the browser.  We'll handle this situation the same way we 
** would handle a "quit" - as in the user pressing the SCO's quit button.
*******************************************************************************/
function unloadPage() {
	if (exitPageStatus != true) {
		doQuit();
	}
	// NOTE:  don't return anything that resembles a javascript 
	//  string from this function or IE will take the
	//  liberty of displaying a confirm message box.
}
/*******************************************************************************
** this function will convert seconds into hours, minutes, and seconds in
** CMITimespan type format - HHHH:MM:SS.SS (Hours has a max of 4 digits &
** Min of 2 digits
*******************************************************************************/
function convertTotalSeconds(ts) {
	var sec = (ts%60);
	ts -= sec;
	var tmp = (ts%3600);//# of seconds in the total # of minutes
	ts -= tmp;//# of seconds in the total # of hours
	// convert seconds to conform to CMITimespan type (e.g. SS.00)
	sec = Math.round(sec*100)/100;
	var strSec = new String(sec);
	var strWholeSec = strSec;
	var strFractionSec = "";
	if (strSec.indexOf(".") != -1) {
		strWholeSec = strSec.substring(0, strSec.indexOf("."));
		strFractionSec = strSec.substring(strSec.indexOf(".")+1, strSec.length);
	}
	if (strWholeSec.length<2) {
		strWholeSec = "0"+strWholeSec;
	}
	strSec = strWholeSec;
	if (strFractionSec.length) {
		strSec = strSec+"."+strFractionSec;
	}
	if ((ts%3600) != 0) {
		var hour = 0;
	} else {
		var hour = (ts/3600);
	}
	if ((tmp%60) != 0) {
		var min = 0;
	} else {
		var min = (tmp/60);
	}
	if ((new String(hour)).length<2) {
		hour = "0"+hour;
	}
	if ((new String(min)).length<2) {
		min = "0"+min;
	}
	var rtnVal = hour+":"+min+":"+strSec;
	return rtnVal;
}

function salvaNota(notaFinal) {
	doLMSSetValue("cmi.core.score.raw",notaFinal);
	doLMSCommit();
}

function salvaPagina(p_pagina) {
  //usuLocation = p_pagina;
  //doLMSSetValue('cmi.core.lesson_location', usuLocation)
  //doLMSCommit()
}

//Função que informa fim do curso/quiz (status: completo)
function fl_finaliza(){	
	doLMSSetValue("cmi.core.lesson_status","completed");
	doLMSCommit();
}

function fl_finalizaERetornaDados(){
	doLMSSetValue("cmi.core.lesson_status","completed");
	doLMSCommit();
}

function fl_gravaSoLessonLocation(x){
	doLMSSetValue("cmi.core.lesson_location", x);
	doLMSCommit();
	console.log('gravou pagina atual')
}

function fl_gravaLessonLocationESuspendData(strLesLoc, strSusDat){
	//var valorSuspendDataFull = doLMSGetValue("cmi.suspend_data");
	//var valorSuspendDataCortado = String(valorSuspendDataFull).substr(3,3999);
	//window.alert(valorSuspendDataFull);	
	changeSuspend = strSusDat;
	doLMSSetValue("cmi.core.lesson_location", strLesLoc);
	doLMSSetValue("cmi.suspend_data", changeSuspend);
	doLMSCommit();
	callFromFlash();
}

function fl_getSuspenData(){	
	 return doLMSGetValue("cmi.suspend_data")
}

function fl_getLessonLocation(){	
	 return doLMSGetValue("cmi.core.lesson_location")
}
//////////////// controle de conteúdo ////////////////

function fl_gravaValorSuspendData(respostasMarcadas)
{
	doLMSSetValue("cmi.suspend_data", respostasMarcadas);
	doLMSCommit();
}


function updateSessionTime() {
   /*
   alert("inicio");
	var startTime = new Date();
	var startHour = startTime.getHours();
	var startMinutes = startTime.getMinutes();
	var startSeconds = startTime.getSeconds();


   var sessionTime = doLMSGetValue("cmi.core.session_time");
   var splitTime = sessionTime.split(":");
   var totalHours = splitTime[0];
   var totalMinutes = splitTime[1];
   var totalSeconds = splitTime[2]; 
   // now get the current date and time on the computer clock
   var nowTime = new Date();
   var nowHour = currentTime.getHours();
   var nowMinutes = currentTime.getMinutes();
   var nowSeconds = currentTime.getSeconds();
   // now calculate the total elapsed time
   var elapsedHours = totalHours + nowHour - startHour;
   if (elapsedHours < 10) elapsedHours = "0" + elapsedHours; 
   var elapsedMinutes = totalMinutes + nowMinutes - startMinutes;
   if (elapsedMinutes < 10) elapsedMinutes = "0" + elapsedMinutes;
   var elapsedSeconds = totalSeconds + nowSeconds - startSeconds;
   if (elapsedSeconds < 10) elapsedSeconds = "0" + elapsedSeconds;
   // prepare the CMITimespan string
   var timeSpan = elapsedHours + ":" + elapsedMinutes + ":" + elapsedSeconds;
  // doLMSSetValue("cmi.core.session_time",formattedTime);
   alert("fim");
   */
   computeTime();
} 