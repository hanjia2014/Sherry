myApp.factory(
            "emailService",
            function ($http, $q) {

                // Return public API.
                return ({
                    send: function (emailInstance) {
                        return $http({
                            method: "post",
                            url: "https://mandrillapp.com/api/1.0/messages/send.json",
                            data: {
                                'key': 'd9cfBtCtNDJqXkVM7Aw2ng',
                                'message': {
                                    'from_email': emailInstance.from,
                                    'to': [
                                        {
                                            'email': 'aplus.sherry@gmail.com',
                                            'name': emailInstance.name,
                                            'type': 'to'
                                        }
                                    ],
                                    'autotext': 'true',
                                    'subject': emailInstance.name + ' - ' + emailInstance.phone,
                                    'html': '<p>Email recieved from ' + emailInstance.name + '</p>' + emailInstance.message
                                }
                            }
                        });
                    },

                });
            });