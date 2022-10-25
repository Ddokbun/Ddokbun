package com.harryporter.ddokbun.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Configuration
@EnableWebSecurity //스프링 시큐리티를 사용하겠다.
public class SpringSecurityConfig {

    private static final Logger log = LoggerFactory.getLogger(SpringSecurityConfig.class);

    //시큐리티에서 사용하는 기본 어텐티케이션 매니저
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {

        return authenticationConfiguration.getAuthenticationManager();
    }


    //WebSecurity를 통해 Spring Security 적용하지 않을 리소스 설정
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer(){
        WebSecurityCustomizer webSecurityCustomizer = new WebSecurityCustomizer() {
            @Override
            public void customize(WebSecurity web) {
                web.ignoring().antMatchers("/swagger-ui/**","/swagger-resources/**", "/v3/api-docs");
                //swagger 는 시큐리티 필터에 안들어가도 된다.

                web.ignoring().anyRequest();
                //모든 요청에 대해 인증 검사를 하지 않는다.
                //url작업하는 거 작은 거 부터해야함
            }
        };

        return webSecurityCustomizer;
    }

/*PermitAll은 인증이 필요없다고 하지만, 반드시 FilterSecurityInterceptor까지 온
 다음에 DispatcherServlet으로 넘어간다. 이 말은, 비록 인증이 필요없
 다고 하지만 반드시 Spring Security가 제공하는 보안 필터를 거친다는 의미이다
 . 반대로 WebIgnore는 SpringSecurity가 제공하는 Filter를 거치지 않는다는 점
 이다. 실제로 이 부분은 아래 동작 화면에서 살펴볼 수 있다. */

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        //기본설정
        //필터에 대해 설정합니다.
        http.cors().configurationSource(corsConfigurationSource());
        //cors에 대해 다음과 같이 설정합니다.
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);//jwt를 사용하기에 상태가 없음
        //세션은 사용하지 않는다.
        http.httpBasic().disable(); // 헤더에 username,password 로그인 사용 불가
        http.csrf().disable(); // csrf 보안 사용 안함
        http.anonymous().disable(); // 익명 사용자 허용 x
        //기본설정 끝

        http.authorizeRequests((authz) -> {
            //authz.antMatchers("/product/rec-mydata").authenticated();
            authz.antMatchers("/product/**"
                    ).permitAll();
            authz.anyRequest().permitAll();//우선은 모두 인가로 설정

        });

        //권한이 허가되지 않았을 떄,
        http.exceptionHandling().accessDeniedHandler(new AccessDeniedHandler() {
            @Override
            public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
                log.info("{} 의 권한 인가 실패 :: {}",request.getRemoteHost(),accessDeniedException.getCause());

            }
        });

        //AuthenticationEntryPoint는 인증이 되지않은 유저가 요청을 했을때 동작된다.
        http.exceptionHandling().authenticationEntryPoint(new AuthenticationEntryPoint() {
            @Override
            public void commence(HttpServletRequest request, HttpServletResponse response, org.springframework.security.core.AuthenticationException authException) throws IOException, ServletException {
                log.info("인증에 필요한 적절한 매개변수를 전달하지 않았습니다. :: {}",authException.getCause());
            }
        });


        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.addAllowedOriginPattern("*");
        //출처가 어디든지 받는다.
        configuration.addAllowedHeader("*");
        //헤더에 아무거나 넣어도 된다.
        configuration.addAllowedMethod("*");
        //메소드 모두 허용한다.
        configuration.setAllowCredentials(true);
        //쿠키 보내도 된다.
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        //모든 요청 경로에 허용한다.
        return source;
    }

}
