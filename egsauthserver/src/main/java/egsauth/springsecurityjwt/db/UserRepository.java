package egsauth.springsecurityjwt.db;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface UserRepository extends MongoRepository<User_DB,String> {

    @Query("{'username': ?0}")
    User_DB loaduser(String username);
}
