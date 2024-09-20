//Use 'Record/Learn' button to begin test recording

function Test(params)
{
	RVL.DoPlayScript("Main.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
	var subTest1_Demo_Post=SeS('subTest1_Demo_Post');
	subTest1_Demo_Post.DoExecute();

	var subTest1_Demo_Post=SeS('subTest1_Demo_Post');
	subTest1_Demo_Post.DoExecute();

	var subTest1_Demo_Post=SeS('subTest1_Demo_Post');
	subTest1_Demo_Post.SetParameter("name", "Apple MacBook Pro 16");
	subTest1_Demo_Post.SetParameter("year", 2019);
	subTest1_Demo_Post.SetParameter("price", 1849);
	subTest1_Demo_Post.SetParameter("CPU model", "Intel Core i9");
	subTest1_Demo_Post.SetParameter("Hard disk size", "1 TB");
	subTest1_Demo_Post.DoExecute();

	var subTest1_Demo_Post=SeS('subTest1_Demo_Post');
	subTest1_Demo_Post.SetParameter("name", "Apple MacBook Pro 16");
	subTest1_Demo_Post.SetParameter("year", 2019);
	subTest1_Demo_Post.SetParameter("price", 1849);
	subTest1_Demo_Post.SetParameter("CPU model", "Intel Core i9");
	subTest1_Demo_Post.SetParameter("Hard disk size", "1 TB");
	subTest1_Demo_Post.DoExecute();

	var subTest1_Demo_Get_By_Id=SeS('subTest1_Demo_Get_By_Id');
	subTest1_Demo_Get_By_Id.DoExecute();

	var subTest1_Demo_Patch_By_Id=SeS('subTest1_Demo_Patch_By_Id');
	subTest1_Demo_Patch_By_Id.DoExecute({}, true);

	Tester.AssertEqual('https://api.restful-api.dev/objects/ff80818192093efb0192097825a100de Response Body Text Comparison Result', subTest1_Demo_Patch_By_Id.GetResponseBodyText(), "{\"error\":\"The Object with id = ff80818192093efb0192097825a100de doesn't exist. Please provide an object id which exists or generate a new Object using POST request and capture the id of it to use it as part of PATCH request after that.\"}");
	subTest1_Demo_Patch_By_Id.DoExecute({}, true);

	Tester.AssertEqual('https://api.restful-api.dev/objects/ff80818192093efb0192097825a100de Response Body Text Comparison Result', subTest1_Demo_Patch_By_Id.GetResponseBodyText(), "{\"error\":\"The Object with id = ff80818192093efb0192097825a100de doesn't exist. Please provide an object id which exists or generate a new Object using POST request and capture the id of it to use it as part of PATCH request after that.\"}");
	subTest1_Demo_Patch_By_Id.DoExecute();

	var subTest1_Demo_Patch_By_Id=SeS('subTest1_Demo_Patch_By_Id');
	subTest1_Demo_Patch_By_Id.DoExecute();

}

