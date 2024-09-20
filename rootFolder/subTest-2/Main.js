//Use 'Record/Learn' button to begin test recording

function Test(params)
{
	RVL.DoPlayScript("Main.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
	var subTest2_Get_All_Objects=SeS('subTest2_Get_All_Objects');
	subTest2_Get_All_Objects.DoExecute();

	var subTest2_Get_All_Objects=SeS('subTest2_Get_All_Objects');
	subTest2_Get_All_Objects.DoExecute();

	var subTest2_Post_Data=SeS('subTest2_Post_Data');
	subTest2_Post_Data.DoExecute();

}

