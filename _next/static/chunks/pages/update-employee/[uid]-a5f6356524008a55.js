(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{6589:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/update-employee/[uid]",function(){return a(806)}])},806:function(e,r,a){"use strict";a.r(r);var t=a(5893),s=a(9008),l=a.n(s),n=a(1163),i=a(8482),d=a(6310),o=a(7357),u=a(6447),m=a(5861),h=a(135),p=a(3321),c=a(8334),x=a(4054),b=a(3340),N=a(6703),f=a(3599),g=a(6815),v=a(6822),y=a(7294);let Z=()=>{let e=(0,n.useRouter)(),r=(0,v.Z)(),[a,s]=(0,y.useState)(null),[c,Z]=(0,y.useState)([]),{uid:j}=e.query,w=(0,i.TA)({initialValues:{firstName:"",lastName:"",password:"",phoneNumber:"",email:"",department:"",submit:null},validationSchema:d.Ry({firstName:d.Z_().max(255).required("Name is required"),lastName:d.Z_().max(255).required("Surname is required"),password:d.Z_().max(255).required("Password is required"),phoneNumber:d.Z_().max(20).required("Phone Number is required"),email:d.Z_().email("Must be a valid email").max(255).required("Email is required"),department:d.Z_().max(255).required("Department is required")}),onSubmit:async(a,t)=>{try{console.log(a);let{firstName:t,lastName:s,password:l,phoneNumber:n,email:i,department:d}=a,o={email:i,firstName:t,lastName:s,phoneNumber:n,departmentUid:d,password:l};console.log(o),await r.patch("/api/v1/employees/".concat(j),o),e.push("/employees")}catch(e){console.error("Error updating employee:",e),t.setStatus({success:!1}),t.setErrors({submit:"Error updating employee."}),t.setSubmitting(!1)}}});return((0,y.useEffect)(()=>{let e=async()=>{try{let e=await r.get("/api/v1/employees/".concat(j));s(e.data)}catch(e){console.error("Error fetching employee data:",e)}},a=async()=>{try{let e=await r.get("/api/v1/services/me/departments");Z(e.data.departments)}catch(e){console.error("Error fetching departments:",e)}};e(),a()},[j]),(0,y.useEffect)(()=>{a&&w.setValues({firstName:a.firstName,lastName:a.lastName,password:"",phoneNumber:a.phoneNumber,email:a.email,department:a.departmentUid,submit:null})},[a,w]),a)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l(),{children:(0,t.jsx)("title",{children:"Update Employee"})}),(0,t.jsx)(o.Z,{sx:{flex:"1 1 auto",alignItems:"center",display:"flex",justifyContent:"center"},children:(0,t.jsx)(o.Z,{sx:{maxWidth:550,px:3,py:"100px",width:"100%"},children:(0,t.jsxs)("div",{children:[(0,t.jsx)(u.Z,{spacing:1,sx:{mb:3},children:(0,t.jsx)(m.Z,{variant:"h4",children:"Update Employee"})}),(0,t.jsxs)("form",{noValidate:!0,onSubmit:w.handleSubmit,children:[(0,t.jsxs)(u.Z,{spacing:3,children:[(0,t.jsx)(h.Z,{error:!!(w.touched.firstName&&w.errors.firstName),fullWidth:!0,helperText:w.touched.firstName&&w.errors.firstName,label:"Name",name:"firstName",onBlur:w.handleBlur,onChange:w.handleChange,value:w.values.firstName}),(0,t.jsx)(h.Z,{error:!!(w.touched.lastName&&w.errors.lastName),fullWidth:!0,helperText:w.touched.lastName&&w.errors.lastName,label:"Surname",name:"lastName",onBlur:w.handleBlur,onChange:w.handleChange,value:w.values.lastName}),(0,t.jsx)(h.Z,{error:!!(w.touched.password&&w.errors.password),fullWidth:!0,helperText:w.touched.password&&w.errors.password,label:"Password",name:"password",onBlur:w.handleBlur,onChange:w.handleChange,type:"password",value:w.values.password}),(0,t.jsx)(h.Z,{error:!!(w.touched.phoneNumber&&w.errors.phoneNumber),fullWidth:!0,helperText:w.touched.phoneNumber&&w.errors.phoneNumber,label:"Phone Number",name:"phoneNumber",onBlur:w.handleBlur,onChange:w.handleChange,value:w.values.phoneNumber}),(0,t.jsx)(h.Z,{error:!!(w.touched.email&&w.errors.email),fullWidth:!0,helperText:w.touched.email&&w.errors.email,label:"Email Address",name:"email",onBlur:w.handleBlur,onChange:w.handleChange,type:"email",value:w.values.email}),(0,t.jsxs)(x.Z,{fullWidth:!0,children:[(0,t.jsx)(b.Z,{id:"department-label",children:"Department"}),(0,t.jsxs)(N.Z,{labelId:"department-label",id:"department",name:"department",value:w.values.department,onChange:w.handleChange,onBlur:w.handleBlur,error:!!(w.touched.department&&w.errors.department),label:"Department",children:[(0,t.jsx)(f.Z,{value:"",disabled:!0,children:"Select a Department"}),c.map(e=>(0,t.jsx)(f.Z,{value:e.uid,children:e.name},e.uid))]}),w.touched.department&&w.errors.department&&(0,t.jsx)(g.Z,{error:!0,children:w.errors.department})]})]}),w.errors.submit&&(0,t.jsx)(m.Z,{color:"error",sx:{mt:3},variant:"body2",children:w.errors.submit}),(0,t.jsx)(p.Z,{fullWidth:!0,size:"large",sx:{mt:3},type:"submit",variant:"contained",children:"Update Employee"})]})]})})})]}):(0,t.jsx)("div",{children:"Loading..."})};Z.getLayout=e=>(0,t.jsx)(c.A,{children:e}),r.default=Z},6822:function(e,r,a){"use strict";var t=a(5121);let s=()=>{let e=t.Z.create({baseURL:"https://bettercity.mikita.dev",timeout:8e3,headers:{Authorization:"Bearer "+window.sessionStorage.getItem("token")}});return e};r.Z=s}},function(e){e.O(0,[60,230,410,703,121,28,333,334,774,888,179],function(){return e(e.s=6589)}),_N_E=e.O()}]);