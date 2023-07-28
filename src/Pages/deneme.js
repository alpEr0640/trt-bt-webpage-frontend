<div id="noScript" style="position:static; width:100%; height:100%; z-index:100">
<h1>JavaScript required</h1>
<p>JavaScript is required. This web browser does not support JavaScript or JavaScript in this web browser is not enabled.</p>
<p>To find out if your web browser supports JavaScript or to enable JavaScript, see web browser help.</p>
</div>
<script type="text/javascript" language="JavaScript">
 document.getElementById("noScript").style.display = "none";
</script>
<div id="fullPage">
<div id="brandingWrapper" class="float">
    <div id="branding"></div>
</div>
<div id="contentWrapper" class="float">
    <div id="content">
        <div id="header">
            <img class='logoImage' id='companyLogo' src='/adfs/portal/logo/logo.png?id=3EDF97EE31E3BCC45B6CAFD38C623436F809FDD581F54D0A2878F34663155808' alt=':TRT ADFS'/>
        </div>
        <main>
            <div id="workArea">
                
<div id="authArea" class="groupMargin">



<div id="loginArea">        
<div id="loginMessage" class="groupMargin">Sign in</div>

<form method="post" id="loginForm" autocomplete="off" novalidate="novalidate" onKeyPress="if (event && event.keyCode == 13) Login.submitLoginRequest();" action="/adfs/ls/?wa=wsignin1.0&wtrealm=https%3a%2f%2fposta.trt.net.tr%2fowa%2f&wctx=rm%3d0%26id%3dpassive%26ru%3d%252fowa%252f&wct=2023-07-28T12%3a25%3a42Z&client-request-id=51507237-bc48-46a1-7b5a-0280010000fa" >
    <div id="error" class="fieldMargin error smallText">
        <span id="errorText" for="" aria-live="assertive" role="alert"></span>
    </div>

    <div id="formsAuthenticationArea">
        <div id="userNameArea">
            <label id="userNameInputLabel" for="userNameInput" class="hidden">User Account</label>
            <input id="userNameInput" name="UserName" type="email" value="" tabindex="1" class="text fullWidth"
                spellcheck="false" placeholder="someone@example.com" autocomplete="off"/>
        </div>

        <div id="passwordArea">
            <label id="passwordInputLabel" for="passwordInput" class="hidden">Password</label>
            <input id="passwordInput" name="Password" type="password" tabindex="2" class="text fullWidth"
                placeholder="Password" autocomplete="off"/>
        </div>
        <div id="kmsiArea" style="display:none">
            <input type="checkbox" name="Kmsi" id="kmsiInput" value="true" tabindex="3" />
            <label for="kmsiInput">Keep me signed in</label>
        </div>
        <div id="submissionArea" class="submitMargin">
            <span id="submitButton" class="submit" tabindex="4" role="button"
                onKeyPress="if (event && event.keyCode == 32) Login.submitLoginRequest();"
                onclick="return Login.submitLoginRequest();">Sign in</span>
        </div>
    </div>
    <input id="optionForms" type="hidden" name="AuthMethod" value="FormsAuthentication"/>
</form>
