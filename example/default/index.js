;(function () {
    const canvas = document.querySelector('#JOV-canva');
    const exampleObject = {
        users: [
            {
                name: "test-1",
                options: {
                    moredepth: {
                        number: 1,
                        is: true,
                    }
                }
            }
        ],
        firstObject: {
            left: true,
            right: {
                is: true,
                number: 11,
                numeric: 1.1,
                testString: "test - test"
            }
        }
    };

    window.JOV.create({
        canvas,
        target: exampleObject
    });
})();
