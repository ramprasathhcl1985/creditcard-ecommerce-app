export class ApplicationConstants {

    public static basePath = 'http://10.117.189.150:8071/';
    public static mobileValidationPattern = '^((\\+91-?)|0)?[0-9]{10}$';
    public static genderTypes: string[] = ['male', 'female'];
    public static policyLists = 'insurancepolicy/policies';
    public static contentTYpe = 'application/json';
    public static policyAddEndPoint = 'insurancepolicy/policies';
    public static PolicyAddBasePath = 'http://10.117.189.90:8080/';
    public static PolicyListBasePath = 'http://10.117.189.75:8080/';
    public static policyaddToast = 'you have subscribed the policy successfully';
    public static policyTrentsEndPoint = 'insurancepolicy/policies/trends';
    public static userLoginId = 'USER-LOGIN-ID';
    public static userfullName = 'USER-FULL-NAME';
    public static userLoginName = 'USER-LOGIN-USER_NAME';
    public static userRoleId = 'USER-LOGIN-ROLE-ID';
    public static loginErrorMessage = 'Please enter valid login details';
    /* form toast types */
    public static toastSeverity = 'success';
    public static policyTrentsChartColors: string[] = ['#42A5F5', '#9CCC65', '#ff6200', '#cc0099'];
    public static policyOverallTrending = 'success';

    /* form static datas */
    public static confirmPasswordInput = 'userConfirmPassword';
    public static passwordInput = 'userPassword';

    public static monthsList: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // tslint:disable-next-line: max-line-length
    public static transactionHeaders: string[] = ['Transaction Description', 'Balance', 'Product Name', 'Transaction Date'];

    public static registerationBasePath = 'http://10.117.189.185:8080/';
    public static registerationEndpoint = 'creditcards/users';
    // public static loginBasePath = 'http://10.117.189.90:8080/';
    public static loginBasePath = 'http://10.117.189.185:8080/';
    public static loginEndpoint = 'creditcards/login';
    public static registerationaddToast = 'User registeration successfull';
    public static productBasePath = 'http://10.117.189.185:9090/';
    public static productEndpoint = 'store/products';
    public static otpEndpoint = 'creditcards/users/';
    public static transactionEndpoint = 'creditcards/transactions';
    public static transactionBasePath = 'http://10.117.189.185:8080/';
    public static creditCardEndpoint = 'creditcards';





}
