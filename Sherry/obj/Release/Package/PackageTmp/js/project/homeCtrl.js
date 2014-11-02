myApp.controller('homeCtrl', function ($scope, emailService) {
    $scope.copyRight = "Han Jia " + new Date().getFullYear();
    $scope.sendEmail = function () {

        if (checkNullOrEmpty($scope.youName)
            || checkNullOrEmpty($scope.youPhone)
            || checkNullOrEmpty($scope.emailMessage)
            || checkNullOrEmpty($scope.emailAddress)) return;

        var emailInstance = {};
        emailInstance.name = $scope.youName;
        emailInstance.phone = $scope.youPhone;
        emailInstance.message = $scope.emailMessage;
        emailInstance.from = $scope.emailAddress;

        emailService.send(emailInstance).success(function () {
            $scope.isEmailSent = true;
        }).error(function () { });
    };

    function checkNullOrEmpty(value) {
        return value == null || value == '';
    };
});