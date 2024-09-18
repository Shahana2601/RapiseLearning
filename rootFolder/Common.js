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

function formatJson(/**string*/ jsonData) {
    return JSON.parse(jsonData.Body);
}