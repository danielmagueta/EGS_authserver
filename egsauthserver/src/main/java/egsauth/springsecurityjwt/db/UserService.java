package egsauth.springsecurityjwt.db;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserService implements UserDetailsService{


    @Autowired
    private UserRepository userRepository;

    public void save(String username, String password)
    {
        this.userRepository.save(new User_DB(username, password));

    }


    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
    {
        if(username == null)
        {
            throw new UsernameNotFoundException("No Username submited!");
        }

        User_DB user = this.userRepository.loaduser(username);

        return new User(user.getUsername(), user.getPassword(), new ArrayList<>());
    }
}
