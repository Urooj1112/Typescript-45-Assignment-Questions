var current_users = ['John', 'Ali', 'Ahmed', 'Saira', 'urooj'];
{
    var new_users = ['urooj', 'john', 'Ali', 'Faaiz', 'Ahad'];
    // Convert current_users to lowercase for case-insensitive comparison
    {
        var current_users_lower = current_users.map(function (username) { return username.toLowerCase(); });
        // Loop through new_users to check for unique usernames
        for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
            var new_username = new_users_1[_i];
            {
                var new_username_lower = new_username.toLowerCase(); // Convert to lowercase for case-insensitive comparison
                // Check if the new username is already used
                if (current_users_lower.indexOf(new_username_lower) !== -1) {
                    console.log("Sorry, the username '".concat(new_username, "' is not available. Please enter a new username."));
                }
                else {
                    console.log("Congratulations! The username '".concat(new_username, "' is available."));
                }
            }
        }
    }
}
