(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(8),s=(t(0),t(101)),a={title:"User Authorization"},c={unversionedId:"user-authorization",id:"user-authorization",isDocsHomePage:!1,title:"User Authorization",description:"Requirements",source:"@site/docs/user-authorization.md",slug:"/user-authorization",permalink:"/docs/user-authorization",editUrl:"https://github.com/alik0211/mtproto-core-website/edit/master/docs/user-authorization.md",version:"current",sidebar:"docs",previous:{title:"Test Phone Numbers",permalink:"/docs/test-phone-numbers"}},i=[{value:"Requirements",id:"requirements",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>getUser</code>",id:"getuser",children:[]},{value:"<code>sendCode</code>",id:"sendcode",children:[]},{value:"<code>signIn</code>",id:"signin",children:[]},{value:"<code>signUp</code>",id:"signup",children:[]},{value:"<code>getPassword</code>",id:"getpassword",children:[]},{value:"<code>checkPassword</code>",id:"checkpassword",children:[]}]},{value:"Flow",id:"flow",children:[]},{value:"Code",id:"code",children:[]}],d={toc:i};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"requirements"},"Requirements"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Use the API module from the ",Object(s.b)("a",{parentName:"li",href:"/docs/setup-handle-errors"},"error handling")," section")),Object(s.b)("h2",{id:"methods"},"Methods"),Object(s.b)("h3",{id:"getuser"},Object(s.b)("inlineCode",{parentName:"h3"},"getUser")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"async function getUser() {\n  try {\n    const user = await api.call('users.getFullUser', {\n      id: {\n        _: 'inputUserSelf',\n      },\n    });\n\n    return user;\n  } catch (error) {\n    return null;\n  }\n}\n")),Object(s.b)("h3",{id:"sendcode"},Object(s.b)("inlineCode",{parentName:"h3"},"sendCode")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"function sendCode(phone) {\n  return api.call('auth.sendCode', {\n    phone_number: phone,\n    settings: {\n      _: 'codeSettings',\n    },\n  });\n}\n")),Object(s.b)("h3",{id:"signin"},Object(s.b)("inlineCode",{parentName:"h3"},"signIn")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"function signIn({ code, phone, phone_code_hash }) {\n  return api.call('auth.signIn', {\n    phone_code: code,\n    phone_number: phone,\n    phone_code_hash: phone_code_hash,\n  });\n}\n")),Object(s.b)("h3",{id:"signup"},Object(s.b)("inlineCode",{parentName:"h3"},"signUp")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"function signUp({ phone, phone_code_hash }) {\n  return api.call('auth.signUp', {\n    phone_number: phone,\n    phone_code_hash: phone_code_hash,\n    first_name: 'MTProto',\n    last_name: 'Core',\n  });\n}\n")),Object(s.b)("h3",{id:"getpassword"},Object(s.b)("inlineCode",{parentName:"h3"},"getPassword")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"function getPassword() {\n  return api.call('account.getPassword');\n}\n")),Object(s.b)("h3",{id:"checkpassword"},Object(s.b)("inlineCode",{parentName:"h3"},"checkPassword")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"function checkPassword({ srp_id, A, M1 }) {\n  return api.call('auth.checkPassword', {\n    password: {\n      _: 'inputCheckPasswordSRP',\n      srp_id,\n      A,\n      M1,\n    },\n  });\n}\n")),Object(s.b)("h2",{id:"flow"},"Flow"),Object(s.b)("p",null,"TODO"),Object(s.b)("h2",{id:"code"},"Code"),Object(s.b)("p",null,"I recommend using ",Object(s.b)("a",{parentName:"p",href:"/docs/test-phone-numbers"},"test phone numbers")," during development"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"(async () => {\n  const user = await getUser();\n\n  const phone = '+99966XYYYY';\n  const code = 'XXXXXX';\n\n  if (!user) {\n    const { phone_code_hash } = await sendCode(phone);\n\n    try {\n      const signInResult = await signIn({\n        code,\n        phone,\n        phone_code_hash,\n      });\n\n      if (signInResult._ === 'auth.authorizationSignUpRequired') {\n        await signUp({\n          phone,\n          phone_code_hash,\n        });\n      }\n    } catch (error) {\n      if (error.error_message !== 'SESSION_PASSWORD_NEEDED') {\n        console.log(`error:`, error);\n\n        return;\n      }\n\n      // 2FA\n\n      const password = 'USER_PASSWORD';\n\n      const { srp_id, current_algo, srp_B } = await getPassword();\n      const { g, p, salt1, salt2 } = current_algo;\n\n      const { A, M1 } = await api.mtproto.crypto.getSRPParams({\n        g,\n        p,\n        salt1,\n        salt2,\n        gB: srp_B,\n        password,\n      });\n\n      const checkPasswordResult = await checkPassword({ srp_id, A, M1 });\n    }\n  }\n})();\n")))}u.isMDXComponent=!0}}]);