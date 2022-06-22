package egsauth.springsecurityjwt;

import egsauth.springsecurityjwt.db.UserService;
import egsauth.springsecurityjwt.models.AuthenticationRequest;
import egsauth.springsecurityjwt.models.AuthenticationResponse;
import egsauth.springsecurityjwt.models.RegisterRequest;
import egsauth.springsecurityjwt.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins ="http://localhost:3000")
public class Validate {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @RequestMapping( "/validate")
    public String hello() { return "Validated"; }


    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try {

            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );

        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }

        final UserDetails userDetails = userService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String jwt = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));

    }


    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) throws Exception {

        try {
            this.userService.save(registerRequest.getUsername(),registerRequest.getPassword());

        } catch (Exception e) {
            throw new Exception("Failed to register user", e);
        }

        return ResponseEntity.ok("Successfully registered user.");

    }



}
