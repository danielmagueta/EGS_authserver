package egsauth.springsecurityjwt.db;

import org.springframework.data.annotation.Id;

public class User_DB {

    @Id
    private String Id;
    private String username;
    private String password;


    public User_DB() {

    }

    public User_DB(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public User_DB(String id, String username, String password) {
        Id = id;
        this.username = username;
        this.password = password;
    }


    public String getId() {
        return Id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setId(String id) {
        Id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
