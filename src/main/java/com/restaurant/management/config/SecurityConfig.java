package com.restaurant.management.config;

import com.restaurant.management.service.security.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.Collections;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST, "/add-user")
                .hasRole("ADMIN")
                /*.antMatchers(HttpMethod.GET).permitAll()*/
                .antMatchers("/","/public/**", "/resources/**","/resources/public/**")
                .permitAll()
                .antMatchers("/authenticate").permitAll()
                .antMatchers("/api/register").permitAll()
                .antMatchers("/").permitAll()
                /*
                    RESTAURANT restrictions
                */
                .antMatchers(HttpMethod.GET, "/api/restaurant/**")
                .permitAll()
                .antMatchers(HttpMethod.POST, "/api/restaurant/create")
                .hasAnyRole("ADMIN")

                .antMatchers(HttpMethod.POST, "/api/restaurant/**/upload-image")
                .hasAnyRole("ADMIN")

                .antMatchers(HttpMethod.PUT, "/api/restaurant/**")
                .hasAnyRole("ADMIN")

                .antMatchers(HttpMethod.DELETE, "/api/restaurant/**")
                .hasAnyRole("ADMIN")

                /*
                    PRODUCT restrictions
                */
                .antMatchers(HttpMethod.GET, "/api/product/**").permitAll()
                .antMatchers(HttpMethod.POST, "/api/product/create")
                .hasAnyRole("ADMIN")

                .antMatchers(HttpMethod.POST, "/api/product/**/upload-image")
                .hasAnyRole("ADMIN")

                .antMatchers(HttpMethod.POST, "/api/product/**/import-products")
                .hasAnyRole("ADMIN")

                .antMatchers(HttpMethod.PUT, "/api/product/**")
                .hasAnyRole("ADMIN")

                .antMatchers(HttpMethod.DELETE, "/api/product/**")
                .hasAnyRole("ADMIN")

                /*
                    ORDER restrictions
                */
                .antMatchers(HttpMethod.GET, "/api/order/**")
                .hasAnyRole("ADMIN", "WAITER")

                .antMatchers(HttpMethod.POST, "/api/order/**")
                .hasAnyRole("ADMIN", "WAITER")

                .antMatchers(HttpMethod.PUT, "/api/order/**")
                .hasAnyRole("ADMIN", "WAITER")

                .antMatchers(HttpMethod.DELETE, "/api/order/**")
                .hasAnyRole("ADMIN", "WAITER")
                .antMatchers(HttpMethod.GET).permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        final CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOrigins(Collections.singletonList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        configuration.setAllowCredentials(true);
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));

        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
