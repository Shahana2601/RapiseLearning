// Put functions and global variables shared across all test cases here

/**
 * Run this code before each test case.
 */
SeSOnTestInit(function() {
	if (g_entryPointName == "Test") {
		// Put your common initialization code here
	}
});

/**
 * Run this code after each test case.
 */
SeSOnTestFinish(function() {
	if (g_entryPointName == "Test") {
		// Put your common finalization code here
	}
});


function dempPost(/**String*/ name, /**String*/ year, /**String*/ price, /**String*/ cpuModel, /**String*/ hardDiskSize ){
var subTest1_Demo_Post=SeS('subTest1_Demo_Post');
	subTest1_Demo_Post.SetParameter("name", name);
	subTest1_Demo_Post.SetParameter("year", year);
	subTest1_Demo_Post.SetParameter("price", price);
	subTest1_Demo_Post.SetParameter("CPU model", cpuModel);
	subTest1_Demo_Post.SetParameter("Hard disk size", hardDiskSize);
	subTest1_Demo_Post.DoExecute();
	var resp=subTest1_Demo_Post.Response;
	return resp;
}

function demo_Get(){
var subTest1_Demo_GetById=SeS('subTest1_Demo_Get_By_Id');
	subTest1_Demo_GetById.DoExecute();
	var resp=subTest1_Demo_GetById.Response;
	return resp;
}

//function formatJson(/**String*/ jsonData ){
//	var prettyJson = JSON.stringify(jsonData);
//	return prettyJson;	
//}

function formatJson(/**String*/ jsonData) {
    return JSON.parse(jsonData.Body);
}

function demoPatch(){
var subTest1_Demo_Patch_By_Id=SeS('subTest1_Demo_Patch_By_Id');
	subTest1_Demo_Patch_By_Id.DoExecute();
	var resp=subTest1_Demo_Patch_By_Id.Response;
	return resp;
}

function getAllUser(){
var subTest2_Get_All_Objects=SeS('subTest2_Get_All_Students');
	subTest2_Get_All_Objects.DoExecute();
	var response = subTest2_Get_All_Objects.Response;
	return response;
}

function postUserData(/**String*/ id, /**String*/ name, /**String*/ location, /**String*/ phone ){
var subTest2_Post_Data=SeS('subTest2_Post_Student');
	subTest2_Post_Data.SetParameter("id", id);
	subTest2_Post_Data.SetParameter("name", name);
	subTest2_Post_Data.SetParameter("loaction", location);
	subTest2_Post_Data.SetParameter("phone", phone);
	subTest2_Post_Data.DoExecute();
	var response = subTest2_Post_Data.Response;
	return response;
}

function deleteUserData(/**String*/ id){
var subTest2_Delete_By_Id=SeS('subTest2_Delete_By_Id');
	subTest2_Delete_By_Id.SetParameter("id", id);
	subTest2_Delete_By_Id.DoExecute();
	var response=subTest2_Delete_By_Id.Response;
	return response;
}

function patchUserDataById(/**String*/ id){
var subTest2_Patch_Student_By_Id=SeS('subTest2_Patch_Student_By_Id');
	subTest2_Patch_Student_By_Id.SetParameter("id", id);
	subTest2_Patch_Student_By_Id.DoExecute();
	var response= subTest2_Patch_Student_By_Id.Response;
	return response;
}