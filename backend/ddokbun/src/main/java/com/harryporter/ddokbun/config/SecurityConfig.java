package com.harryporter.ddokbun.config;

import com.harryporter.ddokbun.config.auth.JwtAuthenticationFilter;
import com.harryporter.ddokbun.config.auth.RestAuthenticationEntryPoint;
import com.harryporter.ddokbun.config.auth.TokenAccessDeniedHandler;
import com.harryporter.ddokbun.utils.auth.JwtTokenUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Slf4j
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final TokenAccessDeniedHandler tokenAccessDeniedHandler;
    private final JwtTokenUtils jwtTokenProvider;

    //WebSecurity를 통해 Spring Security 적용하지 않을 리소스 설정
    @Bean
    public WebSecurityCustomizer configure() {
        return (web) -> web.ignoring().mvcMatchers(
                "/swagger-ui/**","/swagger-resources/**", "/v3/api-docs","/user/login/**" // 임시
        );
    }


    /*PermitAll은 인증이 필요없다고 하지만, 반드시 FilterSecurityInterceptor까지 온
     다음에 DispatcherServlet으로 넘어간다. 이 말은, 비록 인증이 필요없
     다고 하지만 반드시 Spring Security가 제공하는 보안 필터를 거친다는 의미이다
     . 반대로 WebIgnore는 SpringSecurity가 제공하는 Filter를 거치지 않는다는 점
     이다. 실제로 이 부분은 아래 동작 화면에서 살펴볼 수 있다. */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
                .cors().configurationSource(corsConfigurationSource())
                .and()
                .httpBasic().disable() // Http basic Auth 기반 로그인 인증창->소셜 로그인으로 대체
                .anonymous().disable()
                .csrf().disable()// Rest API CSRF 보안 필요 x
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Session 사용 x
                .and()

                .authorizeRequests()
                .antMatchers("/user/login/**").permitAll()
           //     .anyRequest().authenticated()
                .and()

                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling()
                .authenticationEntryPoint(new RestAuthenticationEntryPoint())
                .accessDeniedHandler(tokenAccessDeniedHandler);
        return http.build();
    }

    @Bean
    public  CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOriginPattern("*");//출처가 어디든지 받는다.
        config.addAllowedHeader("*");//헤더에 아무거나 넣어도 된다.
        config.addAllowedMethod("*");//메소드 모두 허용한다.
        config.setAllowCredentials(true);//쿠키 보내도 된다.

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config); //모든 요청 경로에 허용한다.
        return source;
    }

}
