angular.module('ppiiApp', ['autofields', 'ui.bootstrap'])
    .controller('paper', ['$scope',
        function ($scope) {
            $scope.modelPaper = {
                title: '',
                abstract: '',
                link: '',
                impactFactor: '',
                impactFactorLink: '',
                ISBN: '',
                citation: '',
                publicationDate: new Date(),
                disciplines: '',
                publisher: '',
            };
            $scope.skemaCreatePaper = [
                {
                    property: 'title',
                    type: 'text',
                    label: 'Title',
                    placeholder: 'Judul karya tulis',
                    attr: {
                        required: true,
                    },
                    msgs: {
                        required: 'Kolom ini wajib diisi'
                    }
                }, {
                    property: 'abstract',
                    type: 'text',
                    label: 'Abstract',
                    placeholder: 'Abstrak karya tulis',
                    attr: {
                        required: true,
                    },
                    msgs: {
                        required: 'Kolom ini wajib diisi',
                    },
                }, {
                    property: 'link',
                    type: 'url',
                    label: 'Link',
                    placeholder: 'contoh: http://www.karyatulis.com',
                    attr: {
                        required: true,
                    },
                    msgs: {
                        url: 'Format tautan yang anda masukan belum benar',
                        required: 'Kolom ini wajib diisi',
                    },
                }, {
                    property: 'impactFactor',
                    label: 'Impact Factor',
                    type: 'number',
                    placeholder: 'contoh: 5.5',
                    attr: {
                        min: 0.1,
                        step: 0.1
                    },
                    msgs: {
                        min: 'Angka yang anda masukan dibawah 0.1',
                        number: 'Masukan angka'
                    }
                }, {
                    property: 'impactFactorLink',
                    type: 'url',
                    placeholder: 'contoh: http://www.karyatulis.com',
                    attr: {
                        required: true,
                    },
                    msgs: {
                        required: 'Kolom ini wajib diisi',
                        url: 'Tautan yang anda masukan belum benar',
                    },
                }, {
                    property: 'ISBN',
                    type: 'text',
                    placeholder: 'contoh: ISBN 0-596-00681-0',
                    attr: {
                        required: true
                    }
            }, {
                    property: 'citation',
                    label: 'Cititation',
                    type: 'number',
                    attr: {}
            }, {
                    property: 'publicationDate',
                    label: 'Publication Date',
                    type: 'date',
                    attr: {
                        required: true
                    }
            }, {
                    property: 'disciplines',
                    label: 'Disciplines',
                    type: 'text',
                    attr: {
                        required: true
                    }
                }, {
                    property: 'publisher',
                    label: 'Publisher',
                    type: 'select',
                    list: 'key as value for (key,value) in publishers',
                    attr: {
                        required: true,

                    }

            }];
            $scope.optionsPaper = {
                validation: {
                    enabled: true,
                    showMessages: true,
                },
                layout: {
                    type: 'basic',
                    labelSize: 3,
                    inputSize: 9
                }
            };
            $scope.publishers = {
                0: 'Springer',
                1: 'Gramedia'
            };
            }])
    .controller('competition', ['$scope',
       function ($scope) {
            $scope.modelCompetition = {
                name: '',
                description: '',
                startDate: '',
                endDate: '',
                startScoringDate: '',
                endScoringDate: '',
                disclaimer: '',
                cp_name: '',
                cp_phone: '',
                cp_email: ''
            };

            $scope.skemaCreateCompetition = [
                {
                    property: 'name',
                    type: 'text',
                    label: 'Name',
                    placeholder: 'Nama kompetisi',
                    attr: {
                        required: true,
                    },
                    msgs: {
                        required: 'Kolom ini wajib diisi'
                    }
                }, {
                    property: 'description',
                    type: 'textarea',
                    label: 'Description',
                    attr: {
                        required: true,
                    },
                    msgs: {
                        required: 'Kolom ini wajib diisi'
                    }
                }, {
                    property: 'startDate',
                    type: 'date',
                    label: 'Start Date',
                    attr: {
                        required: true,
                    },
                    msgs: {
                        required: 'Kolom ini wajib diisi'
                    }
                }, {
                    property: 'endDate',
                    type: 'date',
                    label: 'End Date',
                    attr: {
                        required: true,
                    },
                    msgs: {
                        required: 'Kolom ini wajib diisi'
                    }
                }, {
                    property: 'startScoringDate',
                    type: 'date',
                    label: 'Start Scoring Date',
                    attr: {
                        required: true,
                    },
                    msgs: {
                        required: 'Kolom ini wajib diisi'
                    }
                }, {
                    property: 'endScoringDate',
                    type: 'date',
                    label: 'End Scoring Date',
                    attr: {
                        required: true,
                    },
                    msgs: {
                        required: 'Kolom ini wajib diisi'
                    }
                }, {
                    property: 'disclaimer',
                    type: 'text',
                    label: 'Disclaimer',
                    attr: {
                        required: true,
                    },
                    msgs: {
                        required: 'Kolom ini wajib diisi'
                    }
                },



            ];
            $scope.skemaContactPersonCompetition = [
                {
                    property: 'email',
                    type: 'email',
                    label: 'Email',
                    placeholder: '',
                    attr: {
                        required: true
                    },
                    msgs: {
                        required: 'Kolom ini wajib diisi',
                        email: 'format email yang anda masukan masih belum benar'
                    },

            },
                {
                    property: 'cp_name',
                    type: 'text',
                    label: 'Name',
                    placeholder: '',
                    attr: {
                        required: true
                    },
                    msgs: {
                        required: 'Kolom ini wajib diisi'
                    }
            },
                {
                    property: 'cp_phone',
                    type: 'number',
                    label: 'Phone',
                    placeholder: '',
                    attr: {
                        required: true,
                        ngMinlength: 8,
                    },
                    msgs: {
                        required: 'Kolom ini wajib diisi',
                        ngMinlength: 'Nomor yang anda masukan belum lengkap'
                    }
            },
           ];

            $scope.optionsCompetition = {
                validation: {
                    enabled: true,
                    showMessages: true,
                },
                layout: {
                    type: 'basic',
                    labelSize: 3,
                    inputSize: 9
                }
            };
       }])
    .controller('user', ['$scope', function ($scope) {
        $scope.modelUser = {
            email: '',
            fullName: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
            role: '',
            profilePicture: '',
            birthdate: '',
            job: '',
            hIndex: '',
            phone: '',
            ktp: '',
            scannedIDNumber: ''
        };
        $scope.skemaCreateUser = [
            {
                property: 'email',
                type: 'email',
                label: 'Email',
                placeholder: '',
                attr: {
                    required: true
                },
                msgs: {
                    required: 'Kolom ini wajib diisi',
                    email: 'format email yang anda masukan masih belum benar'
                },

            },
            {
                property: 'fullName',
                type: 'text',
                label: 'Full Name',
                placeholder: '',
                attr: {
                    required: true
                },
                msgs: {
                    required: 'Kolom ini wajib diisi'
                }
            }, {
                property: 'firstName',
                type: 'text',
                label: 'First Name',
                placeholder: '',
                attr: {
                    required: true
                },
                msgs: {
                    required: 'Kolom ini wajib diisi'
                }
            }, {
                property: 'lastName',
                type: 'text',
                label: 'Last Name',
                placeholder: '',
                attr: {
                    required: true
                },
                msgs: {
                    required: 'Kolom ini wajib diisi'
                }
            }, {
                property: 'password',
                label: 'Password',
                type: 'password',
                placeholder: '',
                attr: {
                    required: true,
                    ngMinlength: 8
                },
                msgs: {
                    required: 'Kolom ini wajib diisi',
                    ngMinlength: 'Karakter yang anda masukan kurang dari 8'
                }
                }, {
                property: 'confirmPassword',
                label: 'Confirm Password',
                type: 'password',
                placeholder: '',
                attr: {
                    confirmPassword: 'modelUser.password',
                    required: true,
                    ngMinlength: 8
                },
                msgs: {
                    required: 'Kolom ini wajib diisi',
                    ngMinlength: 'Karakter yang anda masukan kurang dari 8',
                    match: 'Password baru dan password konfirmasi tidak cocok'

                }
                    }

        ];
        $scope.skemaEditUser = [
            {
                property: 'fullName',
                type: 'text',
                label: 'Full Name',
                placeholder: '',
                attr: {
                    required: true
                },
                msgs: {
                    required: 'Kolom ini wajib diisi'
                }
            }, {
                property: 'firstName',
                type: 'text',
                label: 'First Name',
                placeholder: '',
                attr: {
                    required: true
                },
                msgs: {
                    required: 'Kolom ini wajib diisi'
                }
            }, {
                property: 'lastName',
                type: 'text',
                label: 'Last Name',
                placeholder: '',
                attr: {
                    required: true
                },
                msgs: {
                    required: 'Kolom ini wajib diisi'
                }
            }, {
                property: 'birthdate',
                label: 'Birthdate',
                type: 'date',
                placeholder: '',
                attr: {
                    required: true,
                },
                msgs: {
                    required: 'Kolom ini wajib diisi',
                }
                }, {
                property: 'job',
                label: 'Job',
                type: 'text',
                placeholder: '',
                attr: {
                    required: false,
                }
                }, {
                property: 'hIndex',
                label: 'H-Index',
                type: 'number',
                placeholder: '',
                attr: {
                    min: 0,
                    step: 1,
                    required: true,

                },
                msgs: {
                    required: 'Kolom ini wajib diisi',
                }
                }, {
                property: 'phone',
                label: 'Phone',
                type: 'number',
                placeholder: '',
                attr: {
                    ngMinlength: 8,
                    required: false,

                },
                msgs: {
                    ngMinlength: 'Nomor yang anda masukan belum lengkap',
                }
                }, {
                property: 'ktp',
                label: 'KTP',
                type: 'number',
                placeholder: '',
                attr: {
                    ngMinlength: 16,
                    ngMaxlength: 16

                },
                msgs: {
                    ngMinlength: 'Nomor yang anda masukan belum lengkap',
                    ngMaxlength: 'Nomor KTP adalah 16 digit'

                }
                },

        ];
        $scope.skemaDefineUser = [
            {
                property: 'email',
                type: 'email',
                label: 'Email',
                placeholder: '',
                attr: {
                    required: true
                },
                msgs: {
                    required: 'Kolom ini wajib diisi',
                    email: 'format email yang anda masukan masih belum benar'
                },

            }, {
                property: 'role',
                label: 'Role',
                type: 'select',
                list: 'key as value for (key,value) in role',
                attr: {
                    required: true,

                }

            }

        ];


        $scope.optionsUser = {};
        $scope.role = {
            0: 'admin',
            1: 'super admin',
            2: 'periset'
        };

    }])
    .controller('password', ['$scope', function ($scope) {

        $scope.modelPassword = {
            email: '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        };

        $scope.skemaForgotPassword = [
            {
                property: 'email',
                type: 'email',
                label: 'Email',
                placeholder: '',
                attr: {
                    required: true
                },
                msgs: {
                    required: 'Kolom ini wajib diisi',
                    email: 'format email yang anda masukan masih belum benar'
                }
            }
        ];
        $scope.skemaCreateNewPassword = [
            {
                property: 'newPassword',
                type: 'password',
                label: 'New Password',
                placeholder: '',
                attr: {
                    required: true,
                    ngMinlength: 8
                },
                msgs: {
                    required: 'Kolom ini wajib diisi',
                    ngMinlength: 'Karakter yang anda masukan kurang dari 8'
                }
            },
            {
                property: 'confirmPassword',
                type: 'password',
                label: 'Confirm Password',
                placeholder: '',
                attr: {
                    confirmPassword: 'modelPassword.newPassword',
                    required: true,
                    ngMinlength: 8
                },
                msgs: {
                    match: 'Password baru dan password konfirmasi tidak cocok',
                    required: 'Kolom ini wajib diisi',
                    ngMinlength: 'Karakter yang anda masukan kurang dari 8'
                }
            }

        ];
        $scope.skemaChangePassword = [
            {
                property: 'currentPassword',
                type: 'password',
                label: 'Current Password',
                placeholder: '',
                attr: {
                    required: true,
                    ngMinlength: 8
                },
                msgs: {
                    required: 'Kolom ini wajib diisi',
                    ngMinlength: 'Karakter yang anda masukan kurang dari 8'
                }
            },

            {
                property: 'newPassword',
                label: 'New Password',
                type: 'password',
                placeholder: '',
                attr: {
                    required: true,
                    ngMinlength: 8
                },
                msgs: {
                    required: 'Kolom ini wajib diisi',
                    ngMinlength: 'Karakter yang anda masukan kurang dari 8'

                }
                    },
            {
                property: 'confirmPassword',
                label: 'Confirm Password',
                type: 'password',
                placeholder: '',
                attr: {
                    confirmPassword: 'modelPassword.newPassword',
                    required: true,
                    ngMinlength: 8
                },
                msgs: {
                    required: 'Kolom ini wajib diisi',
                    ngMinlength: 'Karakter yang anda masukan kurang dari 8',
                    match: 'Password baru dan password konfirmasi tidak cocok'

                }
                    }



        ];

        $scope.optionsPassword = {
            validation: {
                enabled: true,
                showMessages: true,
            },
            layout: {
                type: 'basic',
                labelSize: 3,
                inputSize: 9
            }
        };


    }])
    .directive('confirmPassword', [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {
                var validate = function (viewValue) {
                    var password = scope.$eval(attrs.confirmPassword);
                    ngModel.$setValidity('match', ngModel.$isEmpty(viewValue) || viewValue == password);
                    return viewValue;
                }
                ngModel.$parsers.push(validate);
                scope.$watch(attrs.confirmPassword, function (value) {
                    validate(ngModel.$viewValue);
                })
            }
        }
    }])