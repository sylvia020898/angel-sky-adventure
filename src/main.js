
var m0=0,Vu=1,g0=2;var af=1,x0=2,gi=3,ri=0,Bt=1,ot=2,zi=0,Vi=1,yn=2,Gu=3,Wu=4,y0=5,as=100,v0=101,_0=102,M0=103,E0=104,b0=200,S0=201,w0=202,T0=203,gl=204,xl=205,A0=206,R0=207,C0=208,P0=209,I0=210,L0=211,D0=212,U0=213,N0=214,yl=0,vl=1,_l=2,Ys=3,Ml=4,El=5,bl=6,Sl=7,cf=0,H0=1,F0=2,Gi=0,k0=1,O0=2,B0=3,z0=4,V0=5,G0=6,W0=7;var lf=300,Zs=301,Ks=302,wl=303,Tl=304,Oa=306,Kr=1e3,ls=1001,Al=1002,mn=1003,X0=1004;var To=1005;var ni=1006,Hc=1007;var hs=1008;var vi=1009,hf=1010,uf=1011,Jr=1012,Vh=1013,us=1014,ii=1015,ao=1016,Gh=1017,Wh=1018,Js=1020,df=35902,ff=1021,pf=1022,Wn=1023,mf=1024,gf=1025,Xs=1026,js=1027,or=1028,Xh=1029,xf=1030,qh=1031;var $h=1033,ra=33776,oa=33777,aa=33778,ca=33779,Rl=35840,Cl=35841,Pl=35842,Il=35843,Ll=36196,Dl=37492,Ul=37496,Nl=37808,Hl=37809,Fl=37810,kl=37811,Ol=37812,Bl=37813,zl=37814,Vl=37815,Gl=37816,Wl=37817,Xl=37818,ql=37819,$l=37820,Yl=37821,la=36492,Zl=36494,Kl=36495,yf=36283,Jl=36284,jl=36285,Ql=36286;var ha=2300,eh=2301,Fc=2302,Xu=2400,qu=2401,$u=2402;var q0=3200,$0=3201;var vf=0,Y0=1,Oi="",qt="srgb",ar="srgb-linear",Ba="linear",Mt="srgb";var Ss=7680;var Yu=519,Z0=512,K0=513,J0=514,_f=515,j0=516,Q0=517,em=518,tm=519,th=35044;var Zu="300 es",xi=2e3,ua=2001,Xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=1234567,Xr=Math.PI/180,jr=180/Math.PI;function si(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function en(n,e,t){return Math.max(e,Math.min(t,n))}function Yh(n,e){return(n%e+e)%e}function nm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function im(n,e,t){return n!==e?(t-n)/(e-n):0}function qr(n,e,t){return(1-t)*n+t*e}function sm(n,e,t,i){return qr(n,e,1-Math.exp(-t*i))}function rm(n,e=1){return e-Math.abs(Yh(n,e*2)-e)}function om(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function am(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function cm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function lm(n,e){return n+Math.random()*(e-n)}function hm(n){return n*(.5-Math.random())}function um(n){n!==void 0&&(Ku=n);let e=Ku+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dm(n){return n*Xr}function fm(n){return n*jr}function pm(n){return(n&n-1)===0&&n!==0}function mm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function gm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xm(n,e,t,i,s){let r=Math.cos,o=Math.sin,c=r(t/2),a=o(t/2),l=r((e+i)/2),h=o((e+i)/2),f=r((e-i)/2),u=o((e-i)/2),d=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(c*h,a*f,a*u,c*l);break;case"YZY":n.set(a*u,c*h,a*f,c*l);break;case"ZXZ":n.set(a*f,a*u,c*h,c*l);break;case"XZX":n.set(c*h,a*m,a*d,c*l);break;case"YXY":n.set(a*d,c*h,a*m,c*l);break;case"ZYZ":n.set(a*m,a*d,c*h,c*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Dt={DEG2RAD:Xr,RAD2DEG:jr,generateUUID:si,clamp:en,euclideanModulo:Yh,mapLinear:nm,inverseLerp:im,lerp:qr,damp:sm,pingpong:rm,smoothstep:om,smootherstep:am,randInt:cm,randFloat:lm,randFloatSpread:hm,seededRandom:um,degToRad:dm,radToDeg:fm,isPowerOfTwo:pm,ceilPowerOfTwo:mm,floorPowerOfTwo:gm,setQuaternionFromProperEuler:xm,normalize:_t,denormalize:Gn},fe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class n{constructor(e,t,i,s,r,o,c,a,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,c,a,l)}set(e,t,i,s,r,o,c,a,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=c,h[3]=t,h[4]=r,h[5]=a,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],c=i[3],a=i[6],l=i[1],h=i[4],f=i[7],u=i[2],d=i[5],m=i[8],x=s[0],g=s[3],p=s[6],M=s[1],_=s[4],y=s[7],S=s[2],v=s[5],T=s[8];return r[0]=o*x+c*M+a*S,r[3]=o*g+c*_+a*v,r[6]=o*p+c*y+a*T,r[1]=l*x+h*M+f*S,r[4]=l*g+h*_+f*v,r[7]=l*p+h*y+f*T,r[2]=u*x+d*M+m*S,r[5]=u*g+d*_+m*v,r[8]=u*p+d*y+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],c=e[5],a=e[6],l=e[7],h=e[8];return t*o*h-t*c*l-i*r*h+i*c*a+s*r*l-s*o*a}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],c=e[5],a=e[6],l=e[7],h=e[8],f=h*o-c*l,u=c*a-h*r,d=l*r-o*a,m=t*f+i*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=f*x,e[1]=(s*l-h*i)*x,e[2]=(c*i-s*o)*x,e[3]=u*x,e[4]=(h*t-s*a)*x,e[5]=(s*r-c*t)*x,e[6]=d*x,e[7]=(i*a-l*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,c){let a=Math.cos(r),l=Math.sin(r);return this.set(i*a,i*l,-i*(a*o+l*c)+o+e,-s*l,s*a,-s*(-l*o+a*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(kc.makeScale(e,t)),this}rotate(e){return this.premultiply(kc.makeRotation(-e)),this}translate(e,t){return this.premultiply(kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kc=new je;function Mf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ym(){let n=da("canvas");return n.style.display="block",n}var Ju={};function Gr(n){n in Ju||(Ju[n]=!0,console.warn(n))}function vm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function _m(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Mm(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ft={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Mt&&(n.r=yi(n.r),n.g=yi(n.g),n.b=yi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Mt&&(n.r=qs(n.r),n.g=qs(n.g),n.b=qs(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Oi?Ba:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ju=[.64,.33,.3,.6,.15,.06],Qu=[.2126,.7152,.0722],ed=[.3127,.329],td=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nd=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ft.define({[ar]:{primaries:ju,whitePoint:ed,transfer:Ba,toXYZ:td,fromXYZ:nd,luminanceCoefficients:Qu,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:ju,whitePoint:ed,transfer:Mt,toXYZ:td,fromXYZ:nd,luminanceCoefficients:Qu,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}});var ws,nh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ws===void 0&&(ws=da("canvas")),ws.width=e.width,ws.height=e.height;let i=ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=da("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yi(t[i]/255)*255):t[i]=yi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Em=0,fa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,c=s.length;o<c;o++)s[o].isDataTexture?r.push(Oc(s[o].image)):r.push(Oc(s[o]))}else r=Oc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Oc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bm=0,Tn=class n extends Xi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ls,s=ls,r=ni,o=hs,c=Wn,a=vi,l=n.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=si(),this.name="",this.source=new fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=c,this.internalFormat=null,this.type=a,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kr:e.x=e.x-Math.floor(e.x);break;case ls:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kr:e.y=e.y-Math.floor(e.y);break;case ls:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=lf;Tn.DEFAULT_ANISOTROPY=1;var Ot=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,a=e.elements,l=a[0],h=a[4],f=a[8],u=a[1],d=a[5],m=a[9],x=a[2],g=a[6],p=a[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,y=(d+1)/2,S=(p+1)/2,v=(h+u)/4,T=(f+x)/4,P=(m+g)/4;return _>y&&_>S?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=v/i,r=T/i):y>S?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=v/s,r=P/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=T/r,s=P/r),this.set(i,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(f-x)/M,this.z=(u-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ih=class extends Xi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let c=0;c<o;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_i=class extends ih{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},pa=class extends Tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var sh=class extends Tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,c){let a=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(c===0){e[t+0]=a,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(c===1){e[t+0]=u,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(f!==x||a!==u||l!==d||h!==m){let g=1-c,p=a*u+l*d+h*m+f*x,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let S=Math.sqrt(_),v=Math.atan2(S,p*M);g=Math.sin(g*v)/S,c=Math.sin(c*v)/S}let y=c*M;if(a=a*g+u*y,l=l*g+d*y,h=h*g+m*y,f=f*g+x*y,g===1-c){let S=1/Math.sqrt(a*a+l*l+h*h+f*f);a*=S,l*=S,h*=S,f*=S}}e[t]=a,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let c=i[s],a=i[s+1],l=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return e[t]=c*m+h*f+a*d-l*u,e[t+1]=a*m+h*u+l*f-c*d,e[t+2]=l*m+h*d+c*u-a*f,e[t+3]=h*m-c*f-a*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,c=Math.cos,a=Math.sin,l=c(i/2),h=c(s/2),f=c(r/2),u=a(i/2),d=a(s/2),m=a(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f+u*d*m;break;case"YZX":this._x=u*h*f+l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f-u*d*m;break;case"XZY":this._x=u*h*f-l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],c=t[5],a=t[9],l=t[2],h=t[6],f=t[10],u=i+c+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-a)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>c&&i>f){let d=2*Math.sqrt(1+i-c-f);this._w=(h-a)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(c>f){let d=2*Math.sqrt(1+c-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(a+h)/d}else{let d=2*Math.sqrt(1+f-i-c);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(a+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,c=t._x,a=t._y,l=t._z,h=t._w;return this._x=i*h+o*c+s*l-r*a,this._y=s*h+o*a+r*c-i*l,this._z=r*h+o*l+i*a-s*c,this._w=o*h-i*c-s*a-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,c=o*e._w+i*e._x+s*e._y+r*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let a=1-c*c;if(a<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(a),h=Math.atan2(l,c),f=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(id.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(id.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,c=e.z,a=e.w,l=2*(o*s-c*i),h=2*(c*t-r*s),f=2*(r*i-o*t);return this.x=t+a*l+o*f-c*h,this.y=i+a*h+c*l-r*f,this.z=s+a*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,c=t.y,a=t.z;return this.x=s*a-r*c,this.y=r*o-i*a,this.z=i*c-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bc.copy(this).projectOnVector(e),this.sub(Bc)}reflect(e){return this.sub(Bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bc=new A,id=new zt,tn=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=r.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),Ro.subVectors(this.max,Dr),Ts.subVectors(e.a,Dr),As.subVectors(e.b,Dr),Rs.subVectors(e.c,Dr),Di.subVectors(As,Ts),Ui.subVectors(Rs,As),es.subVectors(Ts,Rs);let t=[0,-Di.z,Di.y,0,-Ui.z,Ui.y,0,-es.z,es.y,Di.z,0,-Di.x,Ui.z,0,-Ui.x,es.z,0,-es.x,-Di.y,Di.x,0,-Ui.y,Ui.x,0,-es.y,es.x,0];return!zc(t,Ts,As,Rs,Ro)||(t=[1,0,0,0,1,0,0,0,1],!zc(t,Ts,As,Rs,Ro))?!1:(Co.crossVectors(Di,Ui),t=[Co.x,Co.y,Co.z],zc(t,Ts,As,Rs,Ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ui=[new A,new A,new A,new A,new A,new A,new A,new A],On=new A,Ao=new tn,Ts=new A,As=new A,Rs=new A,Di=new A,Ui=new A,es=new A,Dr=new A,Ro=new A,Co=new A,ts=new A;function zc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ts.fromArray(n,r);let c=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),a=e.dot(ts),l=t.dot(ts),h=i.dot(ts);if(Math.max(-Math.max(a,l,h),Math.min(a,l,h))>c)return!1}return!0}var Sm=new tn,Ur=new A,Vc=new A,Mi=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Sm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);let t=Ur.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(Vc)),this.expandByPoint(Ur.copy(e.center).sub(Vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new A,Gc=new A,Po=new A,Ni=new A,Wc=new A,Io=new A,Xc=new A,Qs=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Gc.copy(e).add(t).multiplyScalar(.5),Po.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(Gc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Po),c=Ni.dot(this.direction),a=-Ni.dot(Po),l=Ni.lengthSq(),h=Math.abs(1-o*o),f,u,d,m;if(h>0)if(f=o*a-c,u=o*c-a,m=r*h,f>=0)if(u>=-m)if(u<=m){let x=1/h;f*=x,u*=x,d=f*(f+o*u+2*c)+u*(o*f+u+2*a)+l}else u=r,f=Math.max(0,-(o*u+c)),d=-f*f+u*(u+2*a)+l;else u=-r,f=Math.max(0,-(o*u+c)),d=-f*f+u*(u+2*a)+l;else u<=-m?(f=Math.max(0,-(-o*r+c)),u=f>0?-r:Math.min(Math.max(-r,-a),r),d=-f*f+u*(u+2*a)+l):u<=m?(f=0,u=Math.min(Math.max(-r,-a),r),d=u*(u+2*a)+l):(f=Math.max(0,-(o*r+c)),u=f>0?r:Math.min(Math.max(-r,-a),r),d=-f*f+u*(u+2*a)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+c)),d=-f*f+u*(u+2*a)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Gc).addScaledVector(Po,u),d}intersectSphere(e,t){di.subVectors(e.center,this.origin);let i=di.dot(this.direction),s=di.dot(di)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),c=i-o,a=i+o;return a<0?null:c<0?this.at(a,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,c,a,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(c=(e.min.z-u.z)*f,a=(e.max.z-u.z)*f):(c=(e.max.z-u.z)*f,a=(e.min.z-u.z)*f),i>a||c>s)||((c>i||i!==i)&&(i=c),(a<s||s!==s)&&(s=a),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,s,r){Wc.subVectors(t,e),Io.subVectors(i,e),Xc.crossVectors(Wc,Io);let o=this.direction.dot(Xc),c;if(o>0){if(s)return null;c=1}else if(o<0)c=-1,o=-o;else return null;Ni.subVectors(this.origin,e);let a=c*this.direction.dot(Io.crossVectors(Ni,Io));if(a<0)return null;let l=c*this.direction.dot(Wc.cross(Ni));if(l<0||a+l>o)return null;let h=-c*Ni.dot(Xc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class n{constructor(e,t,i,s,r,o,c,a,l,h,f,u,d,m,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,c,a,l,h,f,u,d,m,x,g)}set(e,t,i,s,r,o,c,a,l,h,f,u,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=c,p[13]=a,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Cs.setFromMatrixColumn(e,0).length(),r=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),c=Math.sin(i),a=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,m=c*h,x=c*f;t[0]=a*h,t[4]=-a*f,t[8]=l,t[1]=d+m*l,t[5]=u-x*l,t[9]=-c*a,t[2]=x-u*l,t[6]=m+d*l,t[10]=o*a}else if(e.order==="YXZ"){let u=a*h,d=a*f,m=l*h,x=l*f;t[0]=u+x*c,t[4]=m*c-d,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-c,t[2]=d*c-m,t[6]=x+u*c,t[10]=o*a}else if(e.order==="ZXY"){let u=a*h,d=a*f,m=l*h,x=l*f;t[0]=u-x*c,t[4]=-o*f,t[8]=m+d*c,t[1]=d+m*c,t[5]=o*h,t[9]=x-u*c,t[2]=-o*l,t[6]=c,t[10]=o*a}else if(e.order==="ZYX"){let u=o*h,d=o*f,m=c*h,x=c*f;t[0]=a*h,t[4]=m*l-d,t[8]=u*l+x,t[1]=a*f,t[5]=x*l+u,t[9]=d*l-m,t[2]=-l,t[6]=c*a,t[10]=o*a}else if(e.order==="YZX"){let u=o*a,d=o*l,m=c*a,x=c*l;t[0]=a*h,t[4]=x-u*f,t[8]=m*f+d,t[1]=f,t[5]=o*h,t[9]=-c*h,t[2]=-l*h,t[6]=d*f+m,t[10]=u-x*f}else if(e.order==="XZY"){let u=o*a,d=o*l,m=c*a,x=c*l;t[0]=a*h,t[4]=-f,t[8]=l*h,t[1]=u*f+x,t[5]=o*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=c*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wm,e,Tm)}lookAt(e,t,i){let s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Hi.crossVectors(i,Pn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Hi.crossVectors(i,Pn)),Hi.normalize(),Lo.crossVectors(Pn,Hi),s[0]=Hi.x,s[4]=Lo.x,s[8]=Pn.x,s[1]=Hi.y,s[5]=Lo.y,s[9]=Pn.y,s[2]=Hi.z,s[6]=Lo.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],c=i[4],a=i[8],l=i[12],h=i[1],f=i[5],u=i[9],d=i[13],m=i[2],x=i[6],g=i[10],p=i[14],M=i[3],_=i[7],y=i[11],S=i[15],v=s[0],T=s[4],P=s[8],b=s[12],E=s[1],N=s[5],F=s[9],C=s[13],H=s[2],V=s[6],D=s[10],U=s[14],R=s[3],Y=s[7],ne=s[11],de=s[15];return r[0]=o*v+c*E+a*H+l*R,r[4]=o*T+c*N+a*V+l*Y,r[8]=o*P+c*F+a*D+l*ne,r[12]=o*b+c*C+a*U+l*de,r[1]=h*v+f*E+u*H+d*R,r[5]=h*T+f*N+u*V+d*Y,r[9]=h*P+f*F+u*D+d*ne,r[13]=h*b+f*C+u*U+d*de,r[2]=m*v+x*E+g*H+p*R,r[6]=m*T+x*N+g*V+p*Y,r[10]=m*P+x*F+g*D+p*ne,r[14]=m*b+x*C+g*U+p*de,r[3]=M*v+_*E+y*H+S*R,r[7]=M*T+_*N+y*V+S*Y,r[11]=M*P+_*F+y*D+S*ne,r[15]=M*b+_*C+y*U+S*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],c=e[5],a=e[9],l=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*a*f-s*l*f-r*c*u+i*l*u+s*c*d-i*a*d)+x*(+t*a*d-t*l*u+r*o*u-s*o*d+s*l*h-r*a*h)+g*(+t*l*f-t*c*d-r*o*f+i*o*d+r*c*h-i*l*h)+p*(-s*c*h-t*a*f+t*c*u+s*o*f-i*o*u+i*a*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],c=e[5],a=e[6],l=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],M=f*g*l-x*u*l+x*a*d-c*g*d-f*a*p+c*u*p,_=m*u*l-h*g*l-m*a*d+o*g*d+h*a*p-o*u*p,y=h*x*l-m*f*l+m*c*d-o*x*d-h*c*p+o*f*p,S=m*f*a-h*x*a-m*c*u+o*x*u+h*c*g-o*f*g,v=t*M+i*_+s*y+r*S;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/v;return e[0]=M*T,e[1]=(x*u*r-f*g*r-x*s*d+i*g*d+f*s*p-i*u*p)*T,e[2]=(c*g*r-x*a*r+x*s*l-i*g*l-c*s*p+i*a*p)*T,e[3]=(f*a*r-c*u*r-f*s*l+i*u*l+c*s*d-i*a*d)*T,e[4]=_*T,e[5]=(h*g*r-m*u*r+m*s*d-t*g*d-h*s*p+t*u*p)*T,e[6]=(m*a*r-o*g*r-m*s*l+t*g*l+o*s*p-t*a*p)*T,e[7]=(o*u*r-h*a*r+h*s*l-t*u*l-o*s*d+t*a*d)*T,e[8]=y*T,e[9]=(m*f*r-h*x*r-m*i*d+t*x*d+h*i*p-t*f*p)*T,e[10]=(o*x*r-m*c*r+m*i*l-t*x*l-o*i*p+t*c*p)*T,e[11]=(h*c*r-o*f*r-h*i*l+t*f*l+o*i*d-t*c*d)*T,e[12]=S*T,e[13]=(h*x*s-m*f*s+m*i*u-t*x*u-h*i*g+t*f*g)*T,e[14]=(m*c*s-o*x*s-m*i*a+t*x*a+o*i*g-t*c*g)*T,e[15]=(o*f*s-h*c*s+h*i*a-t*f*a-o*i*u+t*c*u)*T,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,c=e.y,a=e.z,l=r*o,h=r*c;return this.set(l*o+i,l*c-s*a,l*a+s*c,0,l*c+s*a,h*c+i,h*a-s*o,0,l*a-s*c,h*a+s*o,r*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,c=t._z,a=t._w,l=r+r,h=o+o,f=c+c,u=r*l,d=r*h,m=r*f,x=o*h,g=o*f,p=c*f,M=a*l,_=a*h,y=a*f,S=i.x,v=i.y,T=i.z;return s[0]=(1-(x+p))*S,s[1]=(d+y)*S,s[2]=(m-_)*S,s[3]=0,s[4]=(d-y)*v,s[5]=(1-(u+p))*v,s[6]=(g+M)*v,s[7]=0,s[8]=(m+_)*T,s[9]=(g-M)*T,s[10]=(1-(u+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Cs.set(s[0],s[1],s[2]).length(),o=Cs.set(s[4],s[5],s[6]).length(),c=Cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Bn.copy(this);let l=1/r,h=1/o,f=1/c;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=f,Bn.elements[9]*=f,Bn.elements[10]*=f,t.setFromRotationMatrix(Bn),i.x=r,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,o,c=xi){let a=this.elements,l=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),u=(i+s)/(i-s),d,m;if(c===xi)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(c===ua)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return a[0]=l,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=h,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,s,r,o,c=xi){let a=this.elements,l=1/(t-e),h=1/(i-s),f=1/(o-r),u=(t+e)*l,d=(i+s)*h,m,x;if(c===xi)m=(o+r)*f,x=-2*f;else if(c===ua)m=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*h,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=x,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Cs=new A,Bn=new at,wm=new A(0,0,0),Tm=new A(1,1,1),Hi=new A,Lo=new A,Pn=new A,sd=new at,rd=new zt,vn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],c=s[8],a=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,d),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-en(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(c,d));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rd.setFromEuler(this),this.setFromQuaternion(rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Am=0,od=new A,Ps=new zt,fi=new at,Do=new A,Nr=new A,Rm=new A,Cm=new zt,ad=new A(1,0,0),cd=new A(0,1,0),ld=new A(0,0,1),hd={type:"added"},Pm={type:"removed"},Is={type:"childadded",child:null},qc={type:"childremoved",child:null},nn=class n extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new A,t=new vn,i=new zt,s=new A(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new je}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(cd,e)}rotateZ(e){return this.rotateOnAxis(ld,e)}translateOnAxis(e,t){return od.copy(e).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(cd,e)}translateZ(e){return this.translateOnAxis(ld,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Do.copy(e):Do.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Nr,Do,this.up):fi.lookAt(Do,Nr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(fi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hd),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pm),qc.child=e,this.dispatchEvent(qc),qc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hd),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,Rm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Cm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(c,a){return c[a.uuid]===void 0&&(c[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let a=c.shapes;if(Array.isArray(a))for(let l=0,h=a.length;l<h;l++){let f=a[l];r(e.shapes,f)}else r(e.shapes,a)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let a=0,l=this.material.length;a<l;a++)c.push(r(e.materials,this.material[a]));s.material=c}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let a=this.animations[c];s.animations.push(r(e.animations,a))}}if(t){let c=o(e.geometries),a=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),m=o(e.nodes);c.length>0&&(i.geometries=c),a.length>0&&(i.materials=a),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(c){let a=[];for(let l in c){let h=c[l];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};nn.DEFAULT_UP=new A(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new A,pi=new A,$c=new A,mi=new A,Ls=new A,Ds=new A,ud=new A,Yc=new A,Zc=new A,Kc=new A,Jc=new Ot,jc=new Ot,Qc=new Ot,Bi=class n{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){zn.subVectors(s,t),pi.subVectors(i,t),$c.subVectors(e,t);let o=zn.dot(zn),c=zn.dot(pi),a=zn.dot($c),l=pi.dot(pi),h=pi.dot($c),f=o*l-c*c;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*a-c*h)*u,m=(o*h-c*a)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,i,s,r,o,c,a){return this.getBarycoord(e,t,i,s,mi)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,mi.x),a.addScaledVector(o,mi.y),a.addScaledVector(c,mi.z),a)}static getInterpolatedAttribute(e,t,i,s,r,o){return Jc.setScalar(0),jc.setScalar(0),Qc.setScalar(0),Jc.fromBufferAttribute(e,t),jc.fromBufferAttribute(e,i),Qc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Jc,r.x),o.addScaledVector(jc,r.y),o.addScaledVector(Qc,r.z),o}static isFrontFacing(e,t,i,s){return zn.subVectors(i,t),pi.subVectors(e,t),zn.cross(pi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),zn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,c;Ls.subVectors(s,i),Ds.subVectors(r,i),Yc.subVectors(e,i);let a=Ls.dot(Yc),l=Ds.dot(Yc);if(a<=0&&l<=0)return t.copy(i);Zc.subVectors(e,s);let h=Ls.dot(Zc),f=Ds.dot(Zc);if(h>=0&&f<=h)return t.copy(s);let u=a*f-h*l;if(u<=0&&a>=0&&h<=0)return o=a/(a-h),t.copy(i).addScaledVector(Ls,o);Kc.subVectors(e,r);let d=Ls.dot(Kc),m=Ds.dot(Kc);if(m>=0&&d<=m)return t.copy(r);let x=d*l-a*m;if(x<=0&&l>=0&&m<=0)return c=l/(l-m),t.copy(i).addScaledVector(Ds,c);let g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return ud.subVectors(r,s),c=(f-h)/(f-h+(d-m)),t.copy(s).addScaledVector(ud,c);let p=1/(g+x+u);return o=x*p,c=u*p,t.copy(i).addScaledVector(Ls,o).addScaledVector(Ds,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function el(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ie=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=Yh(e,1),t=en(t,0,1),i=en(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=el(o,r,e+1/3),this.g=el(o,r,e),this.b=el(o,r,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],c=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let i=Ef[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return ft.fromWorkingColorSpace(pn.copy(this),e),Math.round(en(pn.r*255,0,255))*65536+Math.round(en(pn.g*255,0,255))*256+Math.round(en(pn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(pn.copy(this),t);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),c=Math.min(i,s,r),a,l,h=(c+o)/2;if(c===o)a=0,l=0;else{let f=o-c;switch(l=h<=.5?f/(o+c):f/(2-o-c),o){case i:a=(s-r)/f+(s<r?6:0);break;case s:a=(r-i)/f+2;break;case r:a=(i-s)/f+4;break}a/=6}return e.h=a,e.s=l,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=qt){ft.fromWorkingColorSpace(pn.copy(this),e);let t=pn.r,i=pn.g,s=pn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(Uo);let i=qr(Fi.h,Uo.h,t),s=qr(Fi.s,Uo.s,t),r=qr(Fi.l,Uo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new Ie;Ie.NAMES=Ef;var Im=0,oi=class extends Xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=si(),this.name="",this.blending=Vi,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=xl,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gl&&(i.blendSrc=this.blendSrc),this.blendDst!==xl&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let c in r){let a=r[c];delete a.metadata,o.push(a)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},We=class extends oi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Xt=new A,No=new fe,Rt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=th,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==th&&(e.usage=this.usage),e}};var ma=class extends Rt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ga=class extends Rt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ke=class extends Rt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Lm=0,Dn=new at,tl=new nn,Us=new A,In=new tn,Hr=new tn,Qt=new A,mt=class n extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mf(e)?ga:ma)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return tl.lookAt(e),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ke(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let c=t[r];Hr.setFromBufferAttribute(c),this.morphTargetsRelative?(Qt.addVectors(In.min,Hr.min),In.expandByPoint(Qt),Qt.addVectors(In.max,Hr.max),In.expandByPoint(Qt)):(In.expandByPoint(Hr.min),In.expandByPoint(Hr.max))}In.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){let c=t[r],a=this.morphTargetsRelative;for(let l=0,h=c.count;l<h;l++)Qt.fromBufferAttribute(c,l),a&&(Us.fromBufferAttribute(e,l),Qt.add(Us)),s=Math.max(s,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),c=[],a=[];for(let P=0;P<i.count;P++)c[P]=new A,a[P]=new A;let l=new A,h=new A,f=new A,u=new fe,d=new fe,m=new fe,x=new A,g=new A;function p(P,b,E){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,b),f.fromBufferAttribute(i,E),u.fromBufferAttribute(r,P),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,E),h.sub(l),f.sub(l),d.sub(u),m.sub(u);let N=1/(d.x*m.y-m.x*d.y);isFinite(N)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(N),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(N),c[P].add(x),c[b].add(x),c[E].add(x),a[P].add(g),a[b].add(g),a[E].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,b=M.length;P<b;++P){let E=M[P],N=E.start,F=E.count;for(let C=N,H=N+F;C<H;C+=3)p(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let _=new A,y=new A,S=new A,v=new A;function T(P){S.fromBufferAttribute(s,P),v.copy(S);let b=c[P];_.copy(b),_.sub(S.multiplyScalar(S.dot(b))).normalize(),y.crossVectors(v,b);let N=y.dot(a[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,N)}for(let P=0,b=M.length;P<b;++P){let E=M[P],N=E.start,F=E.count;for(let C=N,H=N+F;C<H;C+=3)T(e.getX(C+0)),T(e.getX(C+1)),T(e.getX(C+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new A,r=new A,o=new A,c=new A,a=new A,l=new A,h=new A,f=new A;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),c.fromBufferAttribute(i,m),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.add(h),a.add(h),l.add(h),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(c,a){let l=c.array,h=c.itemSize,f=c.normalized,u=new l.constructor(a.length*h),d=0,m=0;for(let x=0,g=a.length;x<g;x++){c.isInterleavedBufferAttribute?d=a[x]*c.data.stride+c.offset:d=a[x]*h;for(let p=0;p<h;p++)u[m++]=l[d++]}return new Rt(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let c in s){let a=s[c],l=e(a,i);t.setAttribute(c,l)}let r=this.morphAttributes;for(let c in r){let a=[],l=r[c];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=e(u,i);a.push(d)}t.morphAttributes[c]=a}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,a=o.length;c<a;c++){let l=o[c];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let l in a)a[l]!==void 0&&(e[l]=a[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let a in i){let l=i[a];e.data.attributes[a]=l.toJSON(e.data)}let s={},r=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(e.data))}h.length>0&&(s[a]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dd=new at,ns=new Qs,Ho=new Mi,fd=new A,Fo=new A,ko=new A,Oo=new A,nl=new A,Bo=new A,pd=new A,zo=new A,me=class extends nn{constructor(e=new mt,t=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let c=this.morphTargetInfluences;if(r&&c){Bo.set(0,0,0);for(let a=0,l=r.length;a<l;a++){let h=c[a],f=r[a];h!==0&&(nl.fromBufferAttribute(f,e),o?Bo.addScaledVector(nl,h):Bo.addScaledVector(nl.sub(t),h))}t.add(Bo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(Ho.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Ho,fd)===null||ns.origin.distanceToSquared(fd)>(e.far-e.near)**2))&&(dd.copy(r).invert(),ns.copy(e.ray).applyMatrix4(dd),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,c=r.index,a=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(c!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,S=_;y<S;y+=3){let v=c.getX(y),T=c.getX(y+1),P=c.getX(y+2);s=Vo(this,p,e,i,l,h,f,v,T,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let M=c.getX(g),_=c.getX(g+1),y=c.getX(g+2);s=Vo(this,o,e,i,l,h,f,M,_,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(a!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,S=_;y<S;y+=3){let v=y,T=y+1,P=y+2;s=Vo(this,p,e,i,l,h,f,v,T,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let M=g,_=g+1,y=g+2;s=Vo(this,o,e,i,l,h,f,M,_,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Dm(n,e,t,i,s,r,o,c){let a;if(e.side===Bt?a=i.intersectTriangle(o,r,s,!0,c):a=i.intersectTriangle(s,r,o,e.side===ri,c),a===null)return null;zo.copy(c),zo.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(zo);return l<t.near||l>t.far?null:{distance:l,point:zo.clone(),object:n}}function Vo(n,e,t,i,s,r,o,c,a,l){n.getVertexPosition(c,Fo),n.getVertexPosition(a,ko),n.getVertexPosition(l,Oo);let h=Dm(n,e,t,i,Fo,ko,Oo,pd);if(h){let f=new A;Bi.getBarycoord(pd,Fo,ko,Oo,f),s&&(h.uv=Bi.getInterpolatedAttribute(s,c,a,l,f,new fe)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,c,a,l,f,new fe)),o&&(h.normal=Bi.getInterpolatedAttribute(o,c,a,l,f,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:c,b:a,c:l,normal:new A,materialIndex:0};Bi.getNormal(Fo,ko,Oo,u.normal),h.face=u,h.barycoord=f}return h}var gt=class n extends mt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let c=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let a=[],l=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(a),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(f,2));function m(x,g,p,M,_,y,S,v,T,P,b){let E=y/T,N=S/P,F=y/2,C=S/2,H=v/2,V=T+1,D=P+1,U=0,R=0,Y=new A;for(let ne=0;ne<D;ne++){let de=ne*N-C;for(let Me=0;Me<V;Me++){let ve=Me*E-F;Y[x]=ve*M,Y[g]=de*_,Y[p]=H,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[p]=v>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(Me/T),f.push(1-ne/P),U+=1}}for(let ne=0;ne<P;ne++)for(let de=0;de<T;de++){let Me=u+de+V*ne,ve=u+de+V*(ne+1),q=u+(de+1)+V*(ne+1),ee=u+(de+1)+V*ne;a.push(Me,ve,ee),a.push(ve,q,ee),R+=6}c.addGroup(d,R,b),d+=R,u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function er(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function xn(n){let e={};for(let t=0;t<n.length;t++){let i=er(n[t]);for(let s in i)e[s]=i[s]}return e}function Um(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var cr={clone:er,merge:xn},Nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vt=class extends oi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nm,this.fragmentShader=Hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=Um(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},xa=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new A,md=new fe,gd=new fe,$t=class extends xa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,md,gd),t.subVectors(gd,md)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let a=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/a,t-=o.offsetY*i/l,s*=o.width/a,i*=o.height/l}let c=this.filmOffset;c!==0&&(r+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ns=-90,Hs=1,rh=class extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(Ns,Hs,e,t);s.layers=this.layers,this.add(s);let r=new $t(Ns,Hs,e,t);r.layers=this.layers,this.add(r);let o=new $t(Ns,Hs,e,t);o.layers=this.layers,this.add(o);let c=new $t(Ns,Hs,e,t);c.layers=this.layers,this.add(c);let a=new $t(Ns,Hs,e,t);a.layers=this.layers,this.add(a);let l=new $t(Ns,Hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,c,a]=t;for(let l of t)this.remove(l);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,c,a,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,c),e.setRenderTarget(i,3,s),e.render(t,a),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},ya=class extends Tn{constructor(e,t,i,s,r,o,c,a,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,i,s,r,o,c,a,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oh=class extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ya(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new gt(5,5,5),r=new Vt({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:zi});r.uniforms.tEquirect.value=t;let o=new me(s,r),c=t.minFilter;return t.minFilter===hs&&(t.minFilter=ni),new rh(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},il=new A,Fm=new A,km=new je,Vn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=il.subVectors(i,t).cross(Fm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(il),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||km.getNormalMatrix(e),s=this.coplanarPoint(il).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},is=new Mi,Go=new A,eo=class{constructor(e=new Vn,t=new Vn,i=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(r),c[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi){let i=this.planes,s=e.elements,r=s[0],o=s[1],c=s[2],a=s[3],l=s[4],h=s[5],f=s[6],u=s[7],d=s[8],m=s[9],x=s[10],g=s[11],p=s[12],M=s[13],_=s[14],y=s[15];if(i[0].setComponents(a-r,u-l,g-d,y-p).normalize(),i[1].setComponents(a+r,u+l,g+d,y+p).normalize(),i[2].setComponents(a+o,u+h,g+m,y+M).normalize(),i[3].setComponents(a-o,u-h,g-m,y-M).normalize(),i[4].setComponents(a-c,u-f,g-x,y-_).normalize(),t===xi)i[5].setComponents(a+c,u+f,g+x,y+_).normalize();else if(t===ua)i[5].setComponents(c,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Go.x=s.normal.x>0?e.max.x:e.min.x,Go.y=s.normal.y>0?e.max.y:e.min.y,Go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Om(n){let e=new WeakMap;function t(c,a){let l=c.array,h=c.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(a,u),n.bufferData(a,l,h),c.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)c.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:c.version,size:f}}function i(c,a,l){let h=a.array,f=a.updateRanges;if(n.bindBuffer(l,c),f.length===0)n.bufferSubData(l,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let x=f[d];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}a.clearUpdateRanges()}a.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let a=e.get(c);a&&(n.deleteBuffer(a.buffer),e.delete(c))}function o(c,a){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let h=e.get(c);(!h||h.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let l=e.get(c);if(l===void 0)e.set(c,t(c,a));else if(l.version<c.version){if(l.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,c,a),l.version=c.version}}return{get:s,remove:r,update:o}}var Gt=class n extends mt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,c=Math.floor(i),a=Math.floor(s),l=c+1,h=a+1,f=e/c,u=t/a,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let M=p*u-o;for(let _=0;_<l;_++){let y=_*f-r;m.push(y,-M,0),x.push(0,0,1),g.push(_/c),g.push(1-p/a)}}for(let p=0;p<a;p++)for(let M=0;M<c;M++){let _=M+l*p,y=M+l*(p+1),S=M+1+l*(p+1),v=M+1+l*p;d.push(_,y,v),d.push(y,S,v)}this.setIndex(d),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ym=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ug=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ag=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ig=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ug=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Og=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,px=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$x=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ny=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ay=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,my=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:Bm,alphahash_pars_fragment:zm,alphamap_fragment:Vm,alphamap_pars_fragment:Gm,alphatest_fragment:Wm,alphatest_pars_fragment:Xm,aomap_fragment:qm,aomap_pars_fragment:$m,batching_pars_vertex:Ym,batching_vertex:Zm,begin_vertex:Km,beginnormal_vertex:Jm,bsdfs:jm,iridescence_fragment:Qm,bumpmap_pars_fragment:eg,clipping_planes_fragment:tg,clipping_planes_pars_fragment:ng,clipping_planes_pars_vertex:ig,clipping_planes_vertex:sg,color_fragment:rg,color_pars_fragment:og,color_pars_vertex:ag,color_vertex:cg,common:lg,cube_uv_reflection_fragment:hg,defaultnormal_vertex:ug,displacementmap_pars_vertex:dg,displacementmap_vertex:fg,emissivemap_fragment:pg,emissivemap_pars_fragment:mg,colorspace_fragment:gg,colorspace_pars_fragment:xg,envmap_fragment:yg,envmap_common_pars_fragment:vg,envmap_pars_fragment:_g,envmap_pars_vertex:Mg,envmap_physical_pars_fragment:Lg,envmap_vertex:Eg,fog_vertex:bg,fog_pars_vertex:Sg,fog_fragment:wg,fog_pars_fragment:Tg,gradientmap_pars_fragment:Ag,lightmap_pars_fragment:Rg,lights_lambert_fragment:Cg,lights_lambert_pars_fragment:Pg,lights_pars_begin:Ig,lights_toon_fragment:Dg,lights_toon_pars_fragment:Ug,lights_phong_fragment:Ng,lights_phong_pars_fragment:Hg,lights_physical_fragment:Fg,lights_physical_pars_fragment:kg,lights_fragment_begin:Og,lights_fragment_maps:Bg,lights_fragment_end:zg,logdepthbuf_fragment:Vg,logdepthbuf_pars_fragment:Gg,logdepthbuf_pars_vertex:Wg,logdepthbuf_vertex:Xg,map_fragment:qg,map_pars_fragment:$g,map_particle_fragment:Yg,map_particle_pars_fragment:Zg,metalnessmap_fragment:Kg,metalnessmap_pars_fragment:Jg,morphinstance_vertex:jg,morphcolor_vertex:Qg,morphnormal_vertex:ex,morphtarget_pars_vertex:tx,morphtarget_vertex:nx,normal_fragment_begin:ix,normal_fragment_maps:sx,normal_pars_fragment:rx,normal_pars_vertex:ox,normal_vertex:ax,normalmap_pars_fragment:cx,clearcoat_normal_fragment_begin:lx,clearcoat_normal_fragment_maps:hx,clearcoat_pars_fragment:ux,iridescence_pars_fragment:dx,opaque_fragment:fx,packing:px,premultiplied_alpha_fragment:mx,project_vertex:gx,dithering_fragment:xx,dithering_pars_fragment:yx,roughnessmap_fragment:vx,roughnessmap_pars_fragment:_x,shadowmap_pars_fragment:Mx,shadowmap_pars_vertex:Ex,shadowmap_vertex:bx,shadowmask_pars_fragment:Sx,skinbase_vertex:wx,skinning_pars_vertex:Tx,skinning_vertex:Ax,skinnormal_vertex:Rx,specularmap_fragment:Cx,specularmap_pars_fragment:Px,tonemapping_fragment:Ix,tonemapping_pars_fragment:Lx,transmission_fragment:Dx,transmission_pars_fragment:Ux,uv_pars_fragment:Nx,uv_pars_vertex:Hx,uv_vertex:Fx,worldpos_vertex:kx,background_vert:Ox,background_frag:Bx,backgroundCube_vert:zx,backgroundCube_frag:Vx,cube_vert:Gx,cube_frag:Wx,depth_vert:Xx,depth_frag:qx,distanceRGBA_vert:$x,distanceRGBA_frag:Yx,equirect_vert:Zx,equirect_frag:Kx,linedashed_vert:Jx,linedashed_frag:jx,meshbasic_vert:Qx,meshbasic_frag:ey,meshlambert_vert:ty,meshlambert_frag:ny,meshmatcap_vert:iy,meshmatcap_frag:sy,meshnormal_vert:ry,meshnormal_frag:oy,meshphong_vert:ay,meshphong_frag:cy,meshphysical_vert:ly,meshphysical_frag:hy,meshtoon_vert:uy,meshtoon_frag:dy,points_vert:fy,points_frag:py,shadow_vert:my,shadow_frag:gy,sprite_vert:xy,sprite_frag:yy},Se={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ti={basic:{uniforms:xn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:xn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ie(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:xn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:xn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:xn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ie(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:xn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:xn([Se.points,Se.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:xn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:xn([Se.common,Se.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:xn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:xn([Se.sprite,Se.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:xn([Se.common,Se.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:xn([Se.lights,Se.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};ti.physical={uniforms:xn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var Wo={r:0,b:0,g:0},ss=new vn,vy=new at;function _y(n,e,t,i,s,r,o){let c=new Ie(0),a=r===!0?0:1,l,h,f=null,u=0,d=null;function m(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?t:e).get(_)),_}function x(M){let _=!1,y=m(M);y===null?p(c,a):y&&y.isColor&&(p(y,1),_=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,_){let y=m(_);y&&(y.isCubeTexture||y.mapping===Oa)?(h===void 0&&(h=new me(new gt(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:er(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,v,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ss.copy(_.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vy.makeRotationFromEuler(ss)),h.material.toneMapped=ft.getTransfer(y.colorSpace)!==Mt,(f!==y||u!==y.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=y,u=y.version,d=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new me(new Gt(2,2),new Vt({name:"BackgroundMaterial",uniforms:er(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ft.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||u!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,f=y,u=y.version,d=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,_){M.getRGB(Wo,bf(n)),i.buffers.color.setClear(Wo.r,Wo.g,Wo.b,_,o)}return{getClearColor:function(){return c},setClearColor:function(M,_=1){c.set(M),a=_,p(c,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(c,a)},render:x,addToRenderList:g}}function My(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function c(E,N,F,C,H){let V=!1,D=f(C,F,N);r!==D&&(r=D,l(r.object)),V=d(E,C,F,H),V&&m(E,C,F,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(E,N,F,C),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function a(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function f(E,N,F){let C=F.wireframe===!0,H=i[E.id];H===void 0&&(H={},i[E.id]=H);let V=H[N.id];V===void 0&&(V={},H[N.id]=V);let D=V[C];return D===void 0&&(D=u(a()),V[C]=D),D}function u(E){let N=[],F=[],C=[];for(let H=0;H<t;H++)N[H]=0,F[H]=0,C[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:C,object:E,attributes:{},index:null}}function d(E,N,F,C){let H=r.attributes,V=N.attributes,D=0,U=F.getAttributes();for(let R in U)if(U[R].location>=0){let ne=H[R],de=V[R];if(de===void 0&&(R==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),R==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),ne===void 0||ne.attribute!==de||de&&ne.data!==de.data)return!0;D++}return r.attributesNum!==D||r.index!==C}function m(E,N,F,C){let H={},V=N.attributes,D=0,U=F.getAttributes();for(let R in U)if(U[R].location>=0){let ne=V[R];ne===void 0&&(R==="instanceMatrix"&&E.instanceMatrix&&(ne=E.instanceMatrix),R==="instanceColor"&&E.instanceColor&&(ne=E.instanceColor));let de={};de.attribute=ne,ne&&ne.data&&(de.data=ne.data),H[R]=de,D++}r.attributes=H,r.attributesNum=D,r.index=C}function x(){let E=r.newAttributes;for(let N=0,F=E.length;N<F;N++)E[N]=0}function g(E){p(E,0)}function p(E,N){let F=r.newAttributes,C=r.enabledAttributes,H=r.attributeDivisors;F[E]=1,C[E]===0&&(n.enableVertexAttribArray(E),C[E]=1),H[E]!==N&&(n.vertexAttribDivisor(E,N),H[E]=N)}function M(){let E=r.newAttributes,N=r.enabledAttributes;for(let F=0,C=N.length;F<C;F++)N[F]!==E[F]&&(n.disableVertexAttribArray(F),N[F]=0)}function _(E,N,F,C,H,V,D){D===!0?n.vertexAttribIPointer(E,N,F,H,V):n.vertexAttribPointer(E,N,F,C,H,V)}function y(E,N,F,C){x();let H=C.attributes,V=F.getAttributes(),D=N.defaultAttributeValues;for(let U in V){let R=V[U];if(R.location>=0){let Y=H[U];if(Y===void 0&&(U==="instanceMatrix"&&E.instanceMatrix&&(Y=E.instanceMatrix),U==="instanceColor"&&E.instanceColor&&(Y=E.instanceColor)),Y!==void 0){let ne=Y.normalized,de=Y.itemSize,Me=e.get(Y);if(Me===void 0)continue;let ve=Me.buffer,q=Me.type,ee=Me.bytesPerElement,ge=q===n.INT||q===n.UNSIGNED_INT||Y.gpuType===Vh;if(Y.isInterleavedBufferAttribute){let O=Y.data,$=O.stride,Q=Y.offset;if(O.isInstancedInterleavedBuffer){for(let le=0;le<R.locationSize;le++)p(R.location+le,O.meshPerAttribute);E.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let le=0;le<R.locationSize;le++)g(R.location+le);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let le=0;le<R.locationSize;le++)_(R.location+le,de/R.locationSize,q,ne,$*ee,(Q+de/R.locationSize*le)*ee,ge)}else{if(Y.isInstancedBufferAttribute){for(let O=0;O<R.locationSize;O++)p(R.location+O,Y.meshPerAttribute);E.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let O=0;O<R.locationSize;O++)g(R.location+O);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let O=0;O<R.locationSize;O++)_(R.location+O,de/R.locationSize,q,ne,de*ee,de/R.locationSize*O*ee,ge)}}else if(D!==void 0){let ne=D[U];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(R.location,ne);break;case 3:n.vertexAttrib3fv(R.location,ne);break;case 4:n.vertexAttrib4fv(R.location,ne);break;default:n.vertexAttrib1fv(R.location,ne)}}}}M()}function S(){P();for(let E in i){let N=i[E];for(let F in N){let C=N[F];for(let H in C)h(C[H].object),delete C[H];delete N[F]}delete i[E]}}function v(E){if(i[E.id]===void 0)return;let N=i[E.id];for(let F in N){let C=N[F];for(let H in C)h(C[H].object),delete C[H];delete N[F]}delete i[E.id]}function T(E){for(let N in i){let F=i[N];if(F[E.id]===void 0)continue;let C=F[E.id];for(let H in C)h(C[H].object),delete C[H];delete F[E.id]}}function P(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:P,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:v,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function Ey(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,f){f!==0&&(n.drawArraysInstanced(i,l,h,f),t.update(h,i,f))}function c(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];t.update(d,i,1)}function a(l,h,f,u){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)o(l[m],h[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,f);let m=0;for(let x=0;x<f;x++)m+=h[x]*u[x];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=a}function by(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Wn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(T){let P=T===ao&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==vi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ii&&!P)}function a(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=a(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,v=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:c,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:S,maxSamples:v}}function Sy(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Vn,c=new je,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let M=r?0:i,_=M*4,y=p.clippingState||null;a.value=y,y=h(m,u,_,d);for(let S=0;S!==_;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){a.value!==t&&(a.value=t,a.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,m){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=a.value,m!==!0||g===null){let p=d+x*4,M=u.matrixWorldInverse;c.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,y=d;_!==x;++_,y+=4)o.copy(f[_]).applyMatrix4(M,c),o.normal.toArray(g,y),g[y+3]=o.constant}a.value=g,a.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function wy(n){let e=new WeakMap;function t(o,c){return c===wl?o.mapping=Zs:c===Tl&&(o.mapping=Ks),o}function i(o){if(o&&o.isTexture){let c=o.mapping;if(c===wl||c===Tl)if(e.has(o)){let a=e.get(o).texture;return t(a,o.mapping)}else{let a=o.image;if(a&&a.height>0){let l=new oh(a.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let c=o.target;c.removeEventListener("dispose",s);let a=e.get(c);a!==void 0&&(e.delete(c),a.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var va=class extends xa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,c=s+t,a=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,c-=h*this.view.offsetY,a=c-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gs=4,xd=[.125,.215,.35,.446,.526,.582],cs=20,sl=new va,yd=new Ie,rl=null,ol=0,al=0,cl=!1,os=(1+Math.sqrt(5))/2,Fs=1/os,vd=[new A(-os,Fs,0),new A(os,Fs,0),new A(-Fs,0,os),new A(Fs,0,os),new A(0,os,-Fs),new A(0,os,Fs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],_a=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rl,ol,al),this._renderer.xr.enabled=cl,e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:ao,format:Wn,colorSpace:ar,depthBuffer:!1},s=_d(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_d(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ty(r)),this._blurMaterial=Ay(r,e,t)}return s}_compileMaterial(e){let t=new me(this._lodPlanes[0],e);this._renderer.compile(t,sl)}_sceneToCubeUV(e,t,i,s){let c=new $t(90,1,t,i),a=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(yd),h.toneMapping=Gi,h.autoClear=!1;let d=new We({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),m=new me(new gt,d),x=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,x=!0):(d.color.copy(yd),x=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(c.up.set(0,a[p],0),c.lookAt(l[p],0,0)):M===1?(c.up.set(0,0,a[p]),c.lookAt(0,l[p],0)):(c.up.set(0,a[p],0),c.lookAt(0,0,l[p]));let _=this._cubeSize;Xo(s,M*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Zs||e.mapping===Ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Md());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],r),c=r.uniforms;c.envMap.value=e;let a=this._cubeSize;Xo(t,0,0,3*a,2*a),i.setRenderTarget(t),i.render(o,sl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=vd[(s-r-1)%vd.length];this._blur(e,r-1,r,o,c)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,c){let a=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new me(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*cs-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):cs;g>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cs}`);let p=[],M=0;for(let T=0;T<cs;++T){let P=T/x,b=Math.exp(-P*P/2);p.push(b),T===0?M+=b:T<g&&(M+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",c&&(u.poleAxis.value=c);let{_lodMax:_}=this;u.dTheta.value=m,u.mipInt.value=_-i;let y=this._sizeLods[s],S=3*y*(s>_-Gs?s-_+Gs:0),v=4*(this._cubeSize-y);Xo(t,S,v,3*y,2*y),a.setRenderTarget(t),a.render(f,sl)}};function Ty(n){let e=[],t=[],i=[],s=n,r=n-Gs+1+xd.length;for(let o=0;o<r;o++){let c=Math.pow(2,s);t.push(c);let a=1/c;o>n-Gs?a=xd[o-n+Gs-1]:o===0&&(a=0),i.push(a);let l=1/(c-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,m=6,x=3,g=2,p=1,M=new Float32Array(x*m*d),_=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let v=0;v<d;v++){let T=v%3*2/3-1,P=v>2?0:-1,b=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];M.set(b,x*m*v),_.set(u,g*m*v);let E=[v,v,v,v,v,v];y.set(E,p*m*v)}let S=new mt;S.setAttribute("position",new Rt(M,x)),S.setAttribute("uv",new Rt(_,g)),S.setAttribute("faceIndex",new Rt(y,p)),e.push(S),s>Gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _d(n,e,t){let i=new _i(n,e,t);return i.texture.mapping=Oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Ay(n,e,t){let i=new Float32Array(cs),s=new A(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Md(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Ed(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Zh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ry(n){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){let a=c.mapping,l=a===wl||a===Tl,h=a===Zs||a===Ks;if(l||h){let f=e.get(c),u=f!==void 0?f.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==u)return t===null&&(t=new _a(n)),f=l?t.fromEquirectangular(c,f):t.fromCubemap(c,f),f.texture.pmremVersion=c.pmremVersion,e.set(c,f),f.texture;if(f!==void 0)return f.texture;{let d=c.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new _a(n)),f=l?t.fromEquirectangular(c):t.fromCubemap(c),f.texture.pmremVersion=c.pmremVersion,e.set(c,f),c.addEventListener("dispose",r),f.texture):null}}}return c}function s(c){let a=0,l=6;for(let h=0;h<l;h++)c[h]!==void 0&&a++;return a===l}function r(c){let a=c.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Cy(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Gr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Py(n,e,t,i){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);for(let m in u.morphAttributes){let x=u.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)e.remove(x[g])}u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function c(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function a(f){let u=f.attributes;for(let m in u)e.update(u[m],n.ARRAY_BUFFER);let d=f.morphAttributes;for(let m in d){let x=d[m];for(let g=0,p=x.length;g<p;g++)e.update(x[g],n.ARRAY_BUFFER)}}function l(f){let u=[],d=f.index,m=f.attributes.position,x=0;if(d!==null){let M=d.array;x=d.version;for(let _=0,y=M.length;_<y;_+=3){let S=M[_+0],v=M[_+1],T=M[_+2];u.push(S,v,v,T,T,S)}}else if(m!==void 0){let M=m.array;x=m.version;for(let _=0,y=M.length/3-1;_<y;_+=3){let S=_+0,v=_+1,T=_+2;u.push(S,v,v,T,T,S)}}else return;let g=new(Mf(u)?ga:ma)(u,1);g.version=x;let p=r.get(f);p&&e.remove(p),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:c,update:a,getWireframeAttribute:h}}function Iy(n,e,t){let i;function s(u){i=u}let r,o;function c(u){r=u.type,o=u.bytesPerElement}function a(u,d){n.drawElements(i,d,r,u*o),t.update(d,i,1)}function l(u,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,u*o,m),t.update(d,i,m))}function h(u,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,i,1)}function f(u,d,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)l(u[p]/o,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,x,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*x[M];t.update(p,i,1)}}this.setMode=s,this.setIndex=c,this.render=a,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Ly(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,c){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=c*(r/3);break;case n.LINES:t.lines+=c*(r/2);break;case n.LINE_STRIP:t.lines+=c*(r-1);break;case n.LINE_LOOP:t.lines+=c*r;break;case n.POINTS:t.points+=c*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Dy(n,e,t){let i=new WeakMap,s=new Ot;function r(o,c,a){let l=o.morphTargetInfluences,h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(c);if(u===void 0||u.count!==f){let b=function(){T.dispose(),i.delete(c),c.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let d=c.morphAttributes.position!==void 0,m=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,g=c.morphAttributes.position||[],p=c.morphAttributes.normal||[],M=c.morphAttributes.color||[],_=0;d===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let y=c.attributes.position.count*_,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let v=new Float32Array(y*S*4*f),T=new pa(v,y,S,f);T.type=ii,T.needsUpdate=!0;let P=_*4;for(let E=0;E<f;E++){let N=g[E],F=p[E],C=M[E],H=y*S*4*E;for(let V=0;V<N.count;V++){let D=V*P;d===!0&&(s.fromBufferAttribute(N,V),v[H+D+0]=s.x,v[H+D+1]=s.y,v[H+D+2]=s.z,v[H+D+3]=0),m===!0&&(s.fromBufferAttribute(F,V),v[H+D+4]=s.x,v[H+D+5]=s.y,v[H+D+6]=s.z,v[H+D+7]=0),x===!0&&(s.fromBufferAttribute(C,V),v[H+D+8]=s.x,v[H+D+9]=s.y,v[H+D+10]=s.z,v[H+D+11]=C.itemSize===4?s.w:1)}}u={count:f,texture:T,size:new fe(y,S)},i.set(c,u),c.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let m=c.morphTargetsRelative?1:1-d;a.getUniforms().setValue(n,"morphTargetBaseInfluence",m),a.getUniforms().setValue(n,"morphTargetInfluences",l)}a.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),a.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Uy(n,e,t,i){let s=new WeakMap;function r(a){let l=i.render.frame,h=a.geometry,f=e.get(a,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),a.isInstancedMesh&&(a.hasEventListener("dispose",c)===!1&&a.addEventListener("dispose",c),s.get(a)!==l&&(t.update(a.instanceMatrix,n.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,n.ARRAY_BUFFER),s.set(a,l))),a.isSkinnedMesh){let u=a.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return f}function o(){s=new WeakMap}function c(a){let l=a.target;l.removeEventListener("dispose",c),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Ma=class extends Tn{constructor(e,t,i,s,r,o,c,a,l,h=Xs){if(h!==Xs&&h!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Xs&&(i=us),i===void 0&&h===js&&(i=Js),super(null,s,r,o,c,a,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:mn,this.minFilter=a!==void 0?a:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},wf=new Tn,bd=new Ma(1,1),Tf=new pa,Af=new sh,Rf=new ya,Sd=[],wd=[],Td=new Float32Array(16),Ad=new Float32Array(9),Rd=new Float32Array(4);function lr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Sd[s];if(r===void 0&&(r=new Float32Array(s),Sd[s]=r),e!==0){i.toArray(r,0);for(let o=1,c=0;o!==e;++o)c+=t,n[o].toArray(r,c)}return r}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function za(n,e){let t=wd[e];t===void 0&&(t=new Int32Array(e),wd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ny(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function Fy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function ky(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function Oy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;Rd.set(i),n.uniformMatrix2fv(this.addr,!1,Rd),Kt(t,i)}}function By(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;Ad.set(i),n.uniformMatrix3fv(this.addr,!1,Ad),Kt(t,i)}}function zy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;Td.set(i),n.uniformMatrix4fv(this.addr,!1,Td),Kt(t,i)}}function Vy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Gy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function Wy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function Xy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function qy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $y(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function Yy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function Zy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function Ky(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(bd.compareFunction=_f,r=bd):r=wf,t.setTexture2D(e||r,s)}function Jy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Af,s)}function jy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Rf,s)}function Qy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Tf,s)}function ev(n){switch(n){case 5126:return Ny;case 35664:return Hy;case 35665:return Fy;case 35666:return ky;case 35674:return Oy;case 35675:return By;case 35676:return zy;case 5124:case 35670:return Vy;case 35667:case 35671:return Gy;case 35668:case 35672:return Wy;case 35669:case 35673:return Xy;case 5125:return qy;case 36294:return $y;case 36295:return Yy;case 36296:return Zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return Jy;case 35680:case 36300:case 36308:case 36293:return jy;case 36289:case 36303:case 36311:case 36292:return Qy}}function tv(n,e){n.uniform1fv(this.addr,e)}function nv(n,e){let t=lr(e,this.size,2);n.uniform2fv(this.addr,t)}function iv(n,e){let t=lr(e,this.size,3);n.uniform3fv(this.addr,t)}function sv(n,e){let t=lr(e,this.size,4);n.uniform4fv(this.addr,t)}function rv(n,e){let t=lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ov(n,e){let t=lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function av(n,e){let t=lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function cv(n,e){n.uniform1iv(this.addr,e)}function lv(n,e){n.uniform2iv(this.addr,e)}function hv(n,e){n.uniform3iv(this.addr,e)}function uv(n,e){n.uniform4iv(this.addr,e)}function dv(n,e){n.uniform1uiv(this.addr,e)}function fv(n,e){n.uniform2uiv(this.addr,e)}function pv(n,e){n.uniform3uiv(this.addr,e)}function mv(n,e){n.uniform4uiv(this.addr,e)}function gv(n,e,t){let i=this.cache,s=e.length,r=za(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||wf,r[o])}function xv(n,e,t){let i=this.cache,s=e.length,r=za(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Af,r[o])}function yv(n,e,t){let i=this.cache,s=e.length,r=za(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Rf,r[o])}function vv(n,e,t){let i=this.cache,s=e.length,r=za(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Tf,r[o])}function _v(n){switch(n){case 5126:return tv;case 35664:return nv;case 35665:return iv;case 35666:return sv;case 35674:return rv;case 35675:return ov;case 35676:return av;case 5124:case 35670:return cv;case 35667:case 35671:return lv;case 35668:case 35672:return hv;case 35669:case 35673:return uv;case 5125:return dv;case 36294:return fv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return vv}}var ah=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ev(t.type)}},ch=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_v(t.type)}},lh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let c=s[r];c.setValue(e,t[c.id],i)}}},ll=/(\w+)(\])?(\[|\.)?/g;function Cd(n,e){n.seq.push(e),n.map[e.id]=e}function Mv(n,e,t){let i=n.name,s=i.length;for(ll.lastIndex=0;;){let r=ll.exec(i),o=ll.lastIndex,c=r[1],a=r[2]==="]",l=r[3];if(a&&(c=c|0),l===void 0||l==="["&&o+2===s){Cd(t,l===void 0?new ah(c,n,e):new ch(c,n,e));break}else{let f=t.map[c];f===void 0&&(f=new lh(c),Cd(t,f)),t=f}}}var $s=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Mv(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let c=t[r],a=i[c.id];a.needsUpdate!==!1&&c.setValue(e,a.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Pd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Ev=37297,bv=0;function Sv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let c=o+1;i.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return i.join(`
`)}var Id=new je;function wv(n){ft._getMatrix(Id,ft.workingColorSpace,n);let e=`mat3( ${Id.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case Ba:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ld(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Sv(n.getShaderSource(e),o)}else return s}function Tv(n,e){let t=wv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Av(n,e){let t;switch(e){case k0:t="Linear";break;case O0:t="Reinhard";break;case B0:t="Cineon";break;case z0:t="ACESFilmic";break;case G0:t="AgX";break;case W0:t="Neutral";break;case V0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var qo=new A;function Rv(){ft.getLuminanceCoefficients(qo);let n=qo.x.toFixed(4),e=qo.y.toFixed(4),t=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function Pv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Iv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,c=1;r.type===n.FLOAT_MAT2&&(c=2),r.type===n.FLOAT_MAT3&&(c=3),r.type===n.FLOAT_MAT4&&(c=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:c}}return t}function Wr(n){return n!==""}function Dd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ud(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(n){return n.replace(Lv,Uv)}var Dv=new Map;function Uv(n,e){let t=it[e];if(t===void 0){let i=Dv.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hh(t)}var Nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nd(n){return n.replace(Nv,Hv)}function Hv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===af?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===x0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function kv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zs:case Ks:e="ENVMAP_TYPE_CUBE";break;case Oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ov(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Ks&&(e="ENVMAP_MODE_REFRACTION"),e}function Bv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cf:e="ENVMAP_BLENDING_MULTIPLY";break;case H0:e="ENVMAP_BLENDING_MIX";break;case F0:e="ENVMAP_BLENDING_ADD";break}return e}function zv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Vv(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,c=t.fragmentShader,a=Fv(t),l=kv(t),h=Ov(t),f=Bv(t),u=zv(t),d=Cv(t),m=Pv(r),x=s.createProgram(),g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Wr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Wr).join(`
`),p.length>0&&(p+=`
`)):(g=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),p=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?it.tonemapping_pars_fragment:"",t.toneMapping!==Gi?Av("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Tv("linearToOutputTexel",t.outputColorSpace),Rv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),o=hh(o),o=Dd(o,t),o=Ud(o,t),c=hh(c),c=Dd(c,t),c=Ud(c,t),o=Nd(o),c=Nd(c),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=M+g+o,y=M+p+c,S=Pd(s,s.VERTEX_SHADER,_),v=Pd(s,s.FRAGMENT_SHADER,y);s.attachShader(x,S),s.attachShader(x,v),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(N){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(x).trim(),C=s.getShaderInfoLog(S).trim(),H=s.getShaderInfoLog(v).trim(),V=!0,D=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,S,v);else{let U=Ld(s,S,"vertex"),R=Ld(s,v,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+U+`
`+R)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(C===""||H==="")&&(D=!1);D&&(N.diagnostics={runnable:V,programLog:F,vertexShader:{log:C,prefix:g},fragmentShader:{log:H,prefix:p}})}s.deleteShader(S),s.deleteShader(v),P=new $s(s,x),b=Iv(s,x)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,Ev)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=v,this}var Gv=0,uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new dh(e),t.set(e,i)),i}},dh=class{constructor(e){this.id=Gv++,this.code=e,this.usedTimes=0}};function Wv(n,e,t,i,s,r,o){let c=new Qr,a=new uh,l=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures,d=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,E,N,F,C){let H=F.fog,V=C.geometry,D=b.isMeshStandardMaterial?F.environment:null,U=(b.isMeshStandardMaterial?t:e).get(b.envMap||D),R=U&&U.mapping===Oa?U.image.height:null,Y=m[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ne=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,de=ne!==void 0?ne.length:0,Me=0;V.morphAttributes.position!==void 0&&(Me=1),V.morphAttributes.normal!==void 0&&(Me=2),V.morphAttributes.color!==void 0&&(Me=3);let ve,q,ee,ge;if(Y){let vt=ti[Y];ve=vt.vertexShader,q=vt.fragmentShader}else ve=b.vertexShader,q=b.fragmentShader,a.update(b),ee=a.getVertexShaderID(b),ge=a.getFragmentShaderID(b);let O=n.getRenderTarget(),$=n.state.buffers.depth.getReversed(),Q=C.isInstancedMesh===!0,le=C.isBatchedMesh===!0,Ee=!!b.map,j=!!b.matcap,ce=!!U,k=!!b.aoMap,xe=!!b.lightMap,se=!!b.bumpMap,Z=!!b.normalMap,ie=!!b.displacementMap,De=!!b.emissiveMap,be=!!b.metalnessMap,L=!!b.roughnessMap,w=b.anisotropy>0,z=b.clearcoat>0,te=b.dispersion>0,ue=b.iridescence>0,oe=b.sheen>0,Fe=b.transmission>0,we=w&&!!b.anisotropyMap,Le=z&&!!b.clearcoatMap,ct=z&&!!b.clearcoatNormalMap,pe=z&&!!b.clearcoatRoughnessMap,Ue=ue&&!!b.iridescenceMap,Xe=ue&&!!b.iridescenceThicknessMap,$e=oe&&!!b.sheenColorMap,Ne=oe&&!!b.sheenRoughnessMap,ut=!!b.specularMap,nt=!!b.specularColorMap,bt=!!b.specularIntensityMap,G=Fe&&!!b.transmissionMap,Te=Fe&&!!b.thicknessMap,re=!!b.gradientMap,he=!!b.alphaMap,Ce=b.alphaTest>0,Ae=!!b.alphaHash,et=!!b.extensions,kt=Gi;b.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(kt=n.toneMapping);let dn={shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:ve,fragmentShader:q,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:ge,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:le,batchingColor:le&&C._colorsTexture!==null,instancing:Q,instancingColor:Q&&C.instanceColor!==null,instancingMorph:Q&&C.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:O===null?n.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ar,alphaToCoverage:!!b.alphaToCoverage,map:Ee,matcap:j,envMap:ce,envMapMode:ce&&U.mapping,envMapCubeUVHeight:R,aoMap:k,lightMap:xe,bumpMap:se,normalMap:Z,displacementMap:u&&ie,emissiveMap:De,normalMapObjectSpace:Z&&b.normalMapType===Y0,normalMapTangentSpace:Z&&b.normalMapType===vf,metalnessMap:be,roughnessMap:L,anisotropy:w,anisotropyMap:we,clearcoat:z,clearcoatMap:Le,clearcoatNormalMap:ct,clearcoatRoughnessMap:pe,dispersion:te,iridescence:ue,iridescenceMap:Ue,iridescenceThicknessMap:Xe,sheen:oe,sheenColorMap:$e,sheenRoughnessMap:Ne,specularMap:ut,specularColorMap:nt,specularIntensityMap:bt,transmission:Fe,transmissionMap:G,thicknessMap:Te,gradientMap:re,opaque:b.transparent===!1&&b.blending===Vi&&b.alphaToCoverage===!1,alphaMap:he,alphaTest:Ce,alphaHash:Ae,combine:b.combine,mapUv:Ee&&x(b.map.channel),aoMapUv:k&&x(b.aoMap.channel),lightMapUv:xe&&x(b.lightMap.channel),bumpMapUv:se&&x(b.bumpMap.channel),normalMapUv:Z&&x(b.normalMap.channel),displacementMapUv:ie&&x(b.displacementMap.channel),emissiveMapUv:De&&x(b.emissiveMap.channel),metalnessMapUv:be&&x(b.metalnessMap.channel),roughnessMapUv:L&&x(b.roughnessMap.channel),anisotropyMapUv:we&&x(b.anisotropyMap.channel),clearcoatMapUv:Le&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ct&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(b.sheenRoughnessMap.channel),specularMapUv:ut&&x(b.specularMap.channel),specularColorMapUv:nt&&x(b.specularColorMap.channel),specularIntensityMapUv:bt&&x(b.specularIntensityMap.channel),transmissionMapUv:G&&x(b.transmissionMap.channel),thicknessMapUv:Te&&x(b.thicknessMap.channel),alphaMapUv:he&&x(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Z||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!V.attributes.uv&&(Ee||he),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:$,skinning:C.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Me,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:kt,decodeVideoTexture:Ee&&b.map.isVideoTexture===!0&&ft.getTransfer(b.map.colorSpace)===Mt,decodeVideoTextureEmissive:De&&b.emissiveMap.isVideoTexture===!0&&ft.getTransfer(b.emissiveMap.colorSpace)===Mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ot,flipSided:b.side===Bt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:et&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&b.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return dn.vertexUv1s=l.has(1),dn.vertexUv2s=l.has(2),dn.vertexUv3s=l.has(3),l.clear(),dn}function p(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let N in b.defines)E.push(N),E.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(M(E,b),_(E,b),E.push(n.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function M(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function _(b,E){c.disableAll(),E.supportsVertexTextures&&c.enable(0),E.instancing&&c.enable(1),E.instancingColor&&c.enable(2),E.instancingMorph&&c.enable(3),E.matcap&&c.enable(4),E.envMap&&c.enable(5),E.normalMapObjectSpace&&c.enable(6),E.normalMapTangentSpace&&c.enable(7),E.clearcoat&&c.enable(8),E.iridescence&&c.enable(9),E.alphaTest&&c.enable(10),E.vertexColors&&c.enable(11),E.vertexAlphas&&c.enable(12),E.vertexUv1s&&c.enable(13),E.vertexUv2s&&c.enable(14),E.vertexUv3s&&c.enable(15),E.vertexTangents&&c.enable(16),E.anisotropy&&c.enable(17),E.alphaHash&&c.enable(18),E.batching&&c.enable(19),E.dispersion&&c.enable(20),E.batchingColor&&c.enable(21),b.push(c.mask),c.disableAll(),E.fog&&c.enable(0),E.useFog&&c.enable(1),E.flatShading&&c.enable(2),E.logarithmicDepthBuffer&&c.enable(3),E.reverseDepthBuffer&&c.enable(4),E.skinning&&c.enable(5),E.morphTargets&&c.enable(6),E.morphNormals&&c.enable(7),E.morphColors&&c.enable(8),E.premultipliedAlpha&&c.enable(9),E.shadowMapEnabled&&c.enable(10),E.doubleSided&&c.enable(11),E.flipSided&&c.enable(12),E.useDepthPacking&&c.enable(13),E.dithering&&c.enable(14),E.transmission&&c.enable(15),E.sheen&&c.enable(16),E.opaque&&c.enable(17),E.pointsUvs&&c.enable(18),E.decodeVideoTexture&&c.enable(19),E.decodeVideoTextureEmissive&&c.enable(20),E.alphaToCoverage&&c.enable(21),b.push(c.mask)}function y(b){let E=m[b.type],N;if(E){let F=ti[E];N=cr.clone(F.uniforms)}else N=b.uniforms;return N}function S(b,E){let N;for(let F=0,C=h.length;F<C;F++){let H=h[F];if(H.cacheKey===E){N=H,++N.usedTimes;break}}return N===void 0&&(N=new Vv(n,E,b,r),h.push(N)),N}function v(b){if(--b.usedTimes===0){let E=h.indexOf(b);h[E]=h[h.length-1],h.pop(),b.destroy()}}function T(b){a.remove(b)}function P(){a.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:v,releaseShaderCache:T,programs:h,dispose:P}}function Xv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let c=n.get(o);return c===void 0&&(c={},n.set(o,c)),c}function i(o){n.delete(o)}function s(o,c,a){n.get(o)[c]=a}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function qv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function kd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,u,d,m,x,g){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:m,renderOrder:f.renderOrder,z:x,group:g},n[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=x,p.group=g),e++,p}function c(f,u,d,m,x,g){let p=o(f,u,d,m,x,g);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function a(f,u,d,m,x,g){let p=o(f,u,d,m,x,g);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(f,u){t.length>1&&t.sort(f||qv),i.length>1&&i.sort(u||Fd),s.length>1&&s.sort(u||Fd)}function h(){for(let f=e,u=n.length;f<u;f++){let d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:a,finish:h,sort:l}}function $v(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new kd,n.set(i,[o])):s>=r.length?(o=new kd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Yv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ie};break;case"SpotLight":t={position:new A,direction:new A,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new A,halfWidth:new A,halfHeight:new A};break}return n[e.id]=t,t}}}function Zv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Kv=0;function Jv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jv(n){let e=new Yv,t=Zv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new A);let s=new A,r=new at,o=new at;function c(l){let h=0,f=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,M=0,_=0,y=0,S=0,v=0,T=0;l.sort(Jv);for(let b=0,E=l.length;b<E;b++){let N=l[b],F=N.color,C=N.intensity,H=N.distance,V=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=F.r*C,f+=F.g*C,u+=F.b*C;else if(N.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(N.sh.coefficients[D],C);T++}else if(N.isDirectionalLight){let D=e.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let U=N.shadow,R=t.get(N);R.shadowIntensity=U.intensity,R.shadowBias=U.bias,R.shadowNormalBias=U.normalBias,R.shadowRadius=U.radius,R.shadowMapSize=U.mapSize,i.directionalShadow[d]=R,i.directionalShadowMap[d]=V,i.directionalShadowMatrix[d]=N.shadow.matrix,M++}i.directional[d]=D,d++}else if(N.isSpotLight){let D=e.get(N);D.position.setFromMatrixPosition(N.matrixWorld),D.color.copy(F).multiplyScalar(C),D.distance=H,D.coneCos=Math.cos(N.angle),D.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),D.decay=N.decay,i.spot[x]=D;let U=N.shadow;if(N.map&&(i.spotLightMap[S]=N.map,S++,U.updateMatrices(N),N.castShadow&&v++),i.spotLightMatrix[x]=U.matrix,N.castShadow){let R=t.get(N);R.shadowIntensity=U.intensity,R.shadowBias=U.bias,R.shadowNormalBias=U.normalBias,R.shadowRadius=U.radius,R.shadowMapSize=U.mapSize,i.spotShadow[x]=R,i.spotShadowMap[x]=V,y++}x++}else if(N.isRectAreaLight){let D=e.get(N);D.color.copy(F).multiplyScalar(C),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),i.rectArea[g]=D,g++}else if(N.isPointLight){let D=e.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),D.distance=N.distance,D.decay=N.decay,N.castShadow){let U=N.shadow,R=t.get(N);R.shadowIntensity=U.intensity,R.shadowBias=U.bias,R.shadowNormalBias=U.normalBias,R.shadowRadius=U.radius,R.shadowMapSize=U.mapSize,R.shadowCameraNear=U.camera.near,R.shadowCameraFar=U.camera.far,i.pointShadow[m]=R,i.pointShadowMap[m]=V,i.pointShadowMatrix[m]=N.shadow.matrix,_++}i.point[m]=D,m++}else if(N.isHemisphereLight){let D=e.get(N);D.skyColor.copy(N.color).multiplyScalar(C),D.groundColor.copy(N.groundColor).multiplyScalar(C),i.hemi[p]=D,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let P=i.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==_||P.numSpotShadows!==y||P.numSpotMaps!==S||P.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+S-v,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=v,i.numLightProbes=T,P.directionalLength=d,P.pointLength=m,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=_,P.numSpotShadows=y,P.numSpotMaps=S,P.numLightProbes=T,i.version=Kv++)}function a(l,h){let f=0,u=0,d=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let _=l[p];if(_.isDirectionalLight){let y=i.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(_.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(_.isRectAreaLight){let y=i.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:c,setupView:a,state:i}}function Od(n){let e=new jv(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function c(){e.setup(t)}function a(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:c,setupLightsView:a,pushLight:r,pushShadow:o}}function Qv(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),c;return o===void 0?(c=new Od(n),e.set(s,[c])):r>=o.length?(c=new Od(n),o.push(c)):c=o[r],c}function i(){e=new WeakMap}return{get:t,dispose:i}}var fh=class extends oi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=q0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ph=class extends oi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},e_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function n_(n,e,t){let i=new eo,s=new fe,r=new fe,o=new Ot,c=new fh({depthPacking:$0}),a=new ph,l={},h=t.maxTextureSize,f={[ri]:Bt,[Bt]:ri,[ot]:ot},u=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:e_,fragmentShader:t_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new mt;m.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new me(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=af;let p=this.type;this.render=function(v,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||v.length===0)return;let b=n.getRenderTarget(),E=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),F=n.state;F.setBlending(zi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let C=p!==gi&&this.type===gi,H=p===gi&&this.type!==gi;for(let V=0,D=v.length;V<D;V++){let U=v[V],R=U.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;s.copy(R.mapSize);let Y=R.getFrameExtents();if(s.multiply(Y),r.copy(R.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,R.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,R.mapSize.y=r.y)),R.map===null||C===!0||H===!0){let de=this.type!==gi?{minFilter:mn,magFilter:mn}:{};R.map!==null&&R.map.dispose(),R.map=new _i(s.x,s.y,de),R.map.texture.name=U.name+".shadowMap",R.camera.updateProjectionMatrix()}n.setRenderTarget(R.map),n.clear();let ne=R.getViewportCount();for(let de=0;de<ne;de++){let Me=R.getViewport(de);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),F.viewport(o),R.updateMatrices(U,de),i=R.getFrustum(),y(T,P,R.camera,U,this.type)}R.isPointLightShadow!==!0&&this.type===gi&&M(R,P),R.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(b,E,N)};function M(v,T){let P=e.update(x);u.defines.VSM_SAMPLES!==v.blurSamples&&(u.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new _i(s.x,s.y)),u.uniforms.shadow_pass.value=v.map.texture,u.uniforms.resolution.value=v.mapSize,u.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(T,null,P,u,x,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(T,null,P,d,x,null)}function _(v,T,P,b){let E=null,N=P.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(N!==void 0)E=N;else if(E=P.isPointLight===!0?a:c,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let F=E.uuid,C=T.uuid,H=l[F];H===void 0&&(H={},l[F]=H);let V=H[C];V===void 0&&(V=E.clone(),H[C]=V,T.addEventListener("dispose",S)),E=V}if(E.visible=T.visible,E.wireframe=T.wireframe,b===gi?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:f[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=n.properties.get(E);F.light=P}return E}function y(v,T,P,b,E){if(v.visible===!1)return;if(v.layers.test(T.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&E===gi)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,v.matrixWorld);let C=e.update(v),H=v.material;if(Array.isArray(H)){let V=C.groups;for(let D=0,U=V.length;D<U;D++){let R=V[D],Y=H[R.materialIndex];if(Y&&Y.visible){let ne=_(v,Y,b,E);v.onBeforeShadow(n,v,T,P,C,ne,R),n.renderBufferDirect(P,null,C,ne,v,R),v.onAfterShadow(n,v,T,P,C,ne,R)}}}else if(H.visible){let V=_(v,H,b,E);v.onBeforeShadow(n,v,T,P,C,V,null),n.renderBufferDirect(P,null,C,V,v,null),v.onAfterShadow(n,v,T,P,C,V,null)}}let F=v.children;for(let C=0,H=F.length;C<H;C++)y(F[C],T,P,b,E)}function S(v){v.target.removeEventListener("dispose",S);for(let P in l){let b=l[P],E=v.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}var i_={[yl]:vl,[_l]:bl,[Ml]:Sl,[Ys]:El,[vl]:yl,[bl]:_l,[Sl]:Ml,[El]:Ys};function s_(n,e){function t(){let G=!1,Te=new Ot,re=null,he=new Ot(0,0,0,0);return{setMask:function(Ce){re!==Ce&&!G&&(n.colorMask(Ce,Ce,Ce,Ce),re=Ce)},setLocked:function(Ce){G=Ce},setClear:function(Ce,Ae,et,kt,dn){dn===!0&&(Ce*=kt,Ae*=kt,et*=kt),Te.set(Ce,Ae,et,kt),he.equals(Te)===!1&&(n.clearColor(Ce,Ae,et,kt),he.copy(Te))},reset:function(){G=!1,re=null,he.set(-1,0,0,0)}}}function i(){let G=!1,Te=!1,re=null,he=null,Ce=null;return{setReversed:function(Ae){if(Te!==Ae){let et=e.get("EXT_clip_control");Te?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);let kt=Ce;Ce=null,this.setClear(kt)}Te=Ae},getReversed:function(){return Te},setTest:function(Ae){Ae?O(n.DEPTH_TEST):$(n.DEPTH_TEST)},setMask:function(Ae){re!==Ae&&!G&&(n.depthMask(Ae),re=Ae)},setFunc:function(Ae){if(Te&&(Ae=i_[Ae]),he!==Ae){switch(Ae){case yl:n.depthFunc(n.NEVER);break;case vl:n.depthFunc(n.ALWAYS);break;case _l:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case Ml:n.depthFunc(n.EQUAL);break;case El:n.depthFunc(n.GEQUAL);break;case bl:n.depthFunc(n.GREATER);break;case Sl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Ae}},setLocked:function(Ae){G=Ae},setClear:function(Ae){Ce!==Ae&&(Te&&(Ae=1-Ae),n.clearDepth(Ae),Ce=Ae)},reset:function(){G=!1,re=null,he=null,Ce=null,Te=!1}}}function s(){let G=!1,Te=null,re=null,he=null,Ce=null,Ae=null,et=null,kt=null,dn=null;return{setTest:function(vt){G||(vt?O(n.STENCIL_TEST):$(n.STENCIL_TEST))},setMask:function(vt){Te!==vt&&!G&&(n.stencilMask(vt),Te=vt)},setFunc:function(vt,Fn,li){(re!==vt||he!==Fn||Ce!==li)&&(n.stencilFunc(vt,Fn,li),re=vt,he=Fn,Ce=li)},setOp:function(vt,Fn,li){(Ae!==vt||et!==Fn||kt!==li)&&(n.stencilOp(vt,Fn,li),Ae=vt,et=Fn,kt=li)},setLocked:function(vt){G=vt},setClear:function(vt){dn!==vt&&(n.clearStencil(vt),dn=vt)},reset:function(){G=!1,Te=null,re=null,he=null,Ce=null,Ae=null,et=null,kt=null,dn=null}}}let r=new t,o=new i,c=new s,a=new WeakMap,l=new WeakMap,h={},f={},u=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,_=null,y=null,S=null,v=null,T=new Ie(0,0,0),P=0,b=!1,E=null,N=null,F=null,C=null,H=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,U=0,R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(R)[1]),D=U>=1):R.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),D=U>=2);let Y=null,ne={},de=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),ve=new Ot().fromArray(de),q=new Ot().fromArray(Me);function ee(G,Te,re,he){let Ce=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(G,Ae),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<re;et++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(Te+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return Ae}let ge={};ge[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),c.setClear(0),O(n.DEPTH_TEST),o.setFunc(Ys),se(!1),Z(Vu),O(n.CULL_FACE),k(zi);function O(G){h[G]!==!0&&(n.enable(G),h[G]=!0)}function $(G){h[G]!==!1&&(n.disable(G),h[G]=!1)}function Q(G,Te){return f[G]!==Te?(n.bindFramebuffer(G,Te),f[G]=Te,G===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Te),G===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function le(G,Te){let re=d,he=!1;if(G){re=u.get(Te),re===void 0&&(re=[],u.set(Te,re));let Ce=G.textures;if(re.length!==Ce.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Ae=0,et=Ce.length;Ae<et;Ae++)re[Ae]=n.COLOR_ATTACHMENT0+Ae;re.length=Ce.length,he=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,he=!0);he&&n.drawBuffers(re)}function Ee(G){return m!==G?(n.useProgram(G),m=G,!0):!1}let j={[as]:n.FUNC_ADD,[v0]:n.FUNC_SUBTRACT,[_0]:n.FUNC_REVERSE_SUBTRACT};j[M0]=n.MIN,j[E0]=n.MAX;let ce={[b0]:n.ZERO,[S0]:n.ONE,[w0]:n.SRC_COLOR,[gl]:n.SRC_ALPHA,[I0]:n.SRC_ALPHA_SATURATE,[C0]:n.DST_COLOR,[A0]:n.DST_ALPHA,[T0]:n.ONE_MINUS_SRC_COLOR,[xl]:n.ONE_MINUS_SRC_ALPHA,[P0]:n.ONE_MINUS_DST_COLOR,[R0]:n.ONE_MINUS_DST_ALPHA,[L0]:n.CONSTANT_COLOR,[D0]:n.ONE_MINUS_CONSTANT_COLOR,[U0]:n.CONSTANT_ALPHA,[N0]:n.ONE_MINUS_CONSTANT_ALPHA};function k(G,Te,re,he,Ce,Ae,et,kt,dn,vt){if(G===zi){x===!0&&($(n.BLEND),x=!1);return}if(x===!1&&(O(n.BLEND),x=!0),G!==y0){if(G!==g||vt!==b){if((p!==as||y!==as)&&(n.blendEquation(n.FUNC_ADD),p=as,y=as),vt)switch(G){case Vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yn:n.blendFunc(n.ONE,n.ONE);break;case Gu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}M=null,_=null,S=null,v=null,T.set(0,0,0),P=0,g=G,b=vt}return}Ce=Ce||Te,Ae=Ae||re,et=et||he,(Te!==p||Ce!==y)&&(n.blendEquationSeparate(j[Te],j[Ce]),p=Te,y=Ce),(re!==M||he!==_||Ae!==S||et!==v)&&(n.blendFuncSeparate(ce[re],ce[he],ce[Ae],ce[et]),M=re,_=he,S=Ae,v=et),(kt.equals(T)===!1||dn!==P)&&(n.blendColor(kt.r,kt.g,kt.b,dn),T.copy(kt),P=dn),g=G,b=!1}function xe(G,Te){G.side===ot?$(n.CULL_FACE):O(n.CULL_FACE);let re=G.side===Bt;Te&&(re=!re),se(re),G.blending===Vi&&G.transparent===!1?k(zi):k(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let he=G.stencilWrite;c.setTest(he),he&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),De(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?O(n.SAMPLE_ALPHA_TO_COVERAGE):$(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(G){E!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),E=G)}function Z(G){G!==m0?(O(n.CULL_FACE),G!==N&&(G===Vu?n.cullFace(n.BACK):G===g0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$(n.CULL_FACE),N=G}function ie(G){G!==F&&(D&&n.lineWidth(G),F=G)}function De(G,Te,re){G?(O(n.POLYGON_OFFSET_FILL),(C!==Te||H!==re)&&(n.polygonOffset(Te,re),C=Te,H=re)):$(n.POLYGON_OFFSET_FILL)}function be(G){G?O(n.SCISSOR_TEST):$(n.SCISSOR_TEST)}function L(G){G===void 0&&(G=n.TEXTURE0+V-1),Y!==G&&(n.activeTexture(G),Y=G)}function w(G,Te,re){re===void 0&&(Y===null?re=n.TEXTURE0+V-1:re=Y);let he=ne[re];he===void 0&&(he={type:void 0,texture:void 0},ne[re]=he),(he.type!==G||he.texture!==Te)&&(Y!==re&&(n.activeTexture(re),Y=re),n.bindTexture(G,Te||ge[G]),he.type=G,he.texture=Te)}function z(){let G=ne[Y];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(G){ve.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),ve.copy(G))}function Ne(G){q.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),q.copy(G))}function ut(G,Te){let re=l.get(Te);re===void 0&&(re=new WeakMap,l.set(Te,re));let he=re.get(G);he===void 0&&(he=n.getUniformBlockIndex(Te,G.name),re.set(G,he))}function nt(G,Te){let he=l.get(Te).get(G);a.get(Te)!==he&&(n.uniformBlockBinding(Te,he,G.__bindingPointIndex),a.set(Te,he))}function bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Y=null,ne={},f={},u=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,_=null,y=null,S=null,v=null,T=new Ie(0,0,0),P=0,b=!1,E=null,N=null,F=null,C=null,H=null,ve.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),c.reset()}return{buffers:{color:r,depth:o,stencil:c},enable:O,disable:$,bindFramebuffer:Q,drawBuffers:le,useProgram:Ee,setBlending:k,setMaterial:xe,setFlipSided:se,setCullFace:Z,setLineWidth:ie,setPolygonOffset:De,setScissorTest:be,activeTexture:L,bindTexture:w,unbindTexture:z,compressedTexImage2D:te,compressedTexImage3D:ue,texImage2D:Ue,texImage3D:Xe,updateUBOMapping:ut,uniformBlockBinding:nt,texStorage2D:ct,texStorage3D:pe,texSubImage2D:oe,texSubImage3D:Fe,compressedTexSubImage2D:we,compressedTexSubImage3D:Le,scissor:$e,viewport:Ne,reset:bt}}function Bd(n,e,t,i){let s=r_(i);switch(t){case ff:return n*e;case mf:return n*e;case gf:return n*e*2;case or:return n*e/s.components*s.byteLength;case Xh:return n*e/s.components*s.byteLength;case xf:return n*e*2/s.components*s.byteLength;case qh:return n*e*2/s.components*s.byteLength;case pf:return n*e*3/s.components*s.byteLength;case Wn:return n*e*4/s.components*s.byteLength;case $h:return n*e*4/s.components*s.byteLength;case ra:case oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case aa:case ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cl:case Il:return Math.max(n,16)*Math.max(e,8)/4;case Rl:case Pl:return Math.max(n,8)*Math.max(e,8)/2;case Ll:case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case la:case Zl:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case yf:case Jl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jl:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function r_(n){switch(n){case vi:case hf:return{byteLength:1,components:1};case Jr:case uf:case ao:return{byteLength:2,components:1};case Gh:case Wh:return{byteLength:2,components:4};case us:case Vh:case ii:return{byteLength:4,components:1};case df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function o_(n,e,t,i,s,r,o){let c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new fe,h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,w){return d?new OffscreenCanvas(L,w):da("canvas")}function x(L,w,z){let te=1,ue=be(L);if((ue.width>z||ue.height>z)&&(te=z/Math.max(ue.width,ue.height)),te<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let oe=Math.floor(te*ue.width),Fe=Math.floor(te*ue.height);f===void 0&&(f=m(oe,Fe));let we=w?m(oe,Fe):f;return we.width=oe,we.height=Fe,we.getContext("2d").drawImage(L,0,0,oe,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+oe+"x"+Fe+")."),we}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),L;return L}function g(L){return L.generateMipmaps}function p(L){n.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(L,w,z,te,ue=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let oe=w;if(w===n.RED&&(z===n.FLOAT&&(oe=n.R32F),z===n.HALF_FLOAT&&(oe=n.R16F),z===n.UNSIGNED_BYTE&&(oe=n.R8)),w===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(oe=n.R8UI),z===n.UNSIGNED_SHORT&&(oe=n.R16UI),z===n.UNSIGNED_INT&&(oe=n.R32UI),z===n.BYTE&&(oe=n.R8I),z===n.SHORT&&(oe=n.R16I),z===n.INT&&(oe=n.R32I)),w===n.RG&&(z===n.FLOAT&&(oe=n.RG32F),z===n.HALF_FLOAT&&(oe=n.RG16F),z===n.UNSIGNED_BYTE&&(oe=n.RG8)),w===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(oe=n.RG8UI),z===n.UNSIGNED_SHORT&&(oe=n.RG16UI),z===n.UNSIGNED_INT&&(oe=n.RG32UI),z===n.BYTE&&(oe=n.RG8I),z===n.SHORT&&(oe=n.RG16I),z===n.INT&&(oe=n.RG32I)),w===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(oe=n.RGB8UI),z===n.UNSIGNED_SHORT&&(oe=n.RGB16UI),z===n.UNSIGNED_INT&&(oe=n.RGB32UI),z===n.BYTE&&(oe=n.RGB8I),z===n.SHORT&&(oe=n.RGB16I),z===n.INT&&(oe=n.RGB32I)),w===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(oe=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(oe=n.RGBA16UI),z===n.UNSIGNED_INT&&(oe=n.RGBA32UI),z===n.BYTE&&(oe=n.RGBA8I),z===n.SHORT&&(oe=n.RGBA16I),z===n.INT&&(oe=n.RGBA32I)),w===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(oe=n.RGB9_E5),w===n.RGBA){let Fe=ue?Ba:ft.getTransfer(te);z===n.FLOAT&&(oe=n.RGBA32F),z===n.HALF_FLOAT&&(oe=n.RGBA16F),z===n.UNSIGNED_BYTE&&(oe=Fe===Mt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function y(L,w){let z;return L?w===null||w===us||w===Js?z=n.DEPTH24_STENCIL8:w===ii?z=n.DEPTH32F_STENCIL8:w===Jr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===us||w===Js?z=n.DEPTH_COMPONENT24:w===ii?z=n.DEPTH_COMPONENT32F:w===Jr&&(z=n.DEPTH_COMPONENT16),z}function S(L,w){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==mn&&L.minFilter!==ni?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function v(L){let w=L.target;w.removeEventListener("dispose",v),P(w),w.isVideoTexture&&h.delete(w)}function T(L){let w=L.target;w.removeEventListener("dispose",T),E(w)}function P(L){let w=i.get(L);if(w.__webglInit===void 0)return;let z=L.source,te=u.get(z);if(te){let ue=te[w.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&b(L),Object.keys(te).length===0&&u.delete(z)}i.remove(L)}function b(L){let w=i.get(L);n.deleteTexture(w.__webglTexture);let z=L.source,te=u.get(z);delete te[w.__cacheKey],o.memory.textures--}function E(L){let w=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(w.__webglFramebuffer[te]))for(let ue=0;ue<w.__webglFramebuffer[te].length;ue++)n.deleteFramebuffer(w.__webglFramebuffer[te][ue]);else n.deleteFramebuffer(w.__webglFramebuffer[te]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[te])}else{if(Array.isArray(w.__webglFramebuffer))for(let te=0;te<w.__webglFramebuffer.length;te++)n.deleteFramebuffer(w.__webglFramebuffer[te]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let te=0;te<w.__webglColorRenderbuffer.length;te++)w.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[te]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let z=L.textures;for(let te=0,ue=z.length;te<ue;te++){let oe=i.get(z[te]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(z[te])}i.remove(L)}let N=0;function F(){N=0}function C(){let L=N;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),N+=1,L}function H(L){let w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function V(L,w){let z=i.get(L);if(L.isVideoTexture&&ie(L),L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){let te=L.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,L,w);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+w)}function D(L,w){let z=i.get(L);if(L.version>0&&z.__version!==L.version){q(z,L,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+w)}function U(L,w){let z=i.get(L);if(L.version>0&&z.__version!==L.version){q(z,L,w);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+w)}function R(L,w){let z=i.get(L);if(L.version>0&&z.__version!==L.version){ee(z,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+w)}let Y={[Kr]:n.REPEAT,[ls]:n.CLAMP_TO_EDGE,[Al]:n.MIRRORED_REPEAT},ne={[mn]:n.NEAREST,[X0]:n.NEAREST_MIPMAP_NEAREST,[To]:n.NEAREST_MIPMAP_LINEAR,[ni]:n.LINEAR,[Hc]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},de={[Z0]:n.NEVER,[tm]:n.ALWAYS,[K0]:n.LESS,[_f]:n.LEQUAL,[J0]:n.EQUAL,[em]:n.GEQUAL,[j0]:n.GREATER,[Q0]:n.NOTEQUAL};function Me(L,w){if(w.type===ii&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ni||w.magFilter===Hc||w.magFilter===To||w.magFilter===hs||w.minFilter===ni||w.minFilter===Hc||w.minFilter===To||w.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,Y[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,Y[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,Y[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ne[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ne[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,de[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===mn||w.minFilter!==To&&w.minFilter!==hs||w.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ve(L,w){let z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",v));let te=w.source,ue=u.get(te);ue===void 0&&(ue={},u.set(te,ue));let oe=H(w);if(oe!==L.__cacheKey){ue[oe]===void 0&&(ue[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ue[oe].usedTimes++;let Fe=ue[L.__cacheKey];Fe!==void 0&&(ue[L.__cacheKey].usedTimes--,Fe.usedTimes===0&&b(w)),L.__cacheKey=oe,L.__webglTexture=ue[oe].texture}return z}function q(L,w,z){let te=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(te=n.TEXTURE_3D);let ue=ve(L,w),oe=w.source;t.bindTexture(te,L.__webglTexture,n.TEXTURE0+z);let Fe=i.get(oe);if(oe.version!==Fe.__version||ue===!0){t.activeTexture(n.TEXTURE0+z);let we=ft.getPrimaries(ft.workingColorSpace),Le=w.colorSpace===Oi?null:ft.getPrimaries(w.colorSpace),ct=w.colorSpace===Oi||we===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let pe=x(w.image,!1,s.maxTextureSize);pe=De(w,pe);let Ue=r.convert(w.format,w.colorSpace),Xe=r.convert(w.type),$e=_(w.internalFormat,Ue,Xe,w.colorSpace,w.isVideoTexture);Me(te,w);let Ne,ut=w.mipmaps,nt=w.isVideoTexture!==!0,bt=Fe.__version===void 0||ue===!0,G=oe.dataReady,Te=S(w,pe);if(w.isDepthTexture)$e=y(w.format===js,w.type),bt&&(nt?t.texStorage2D(n.TEXTURE_2D,1,$e,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,$e,pe.width,pe.height,0,Ue,Xe,null));else if(w.isDataTexture)if(ut.length>0){nt&&bt&&t.texStorage2D(n.TEXTURE_2D,Te,$e,ut[0].width,ut[0].height);for(let re=0,he=ut.length;re<he;re++)Ne=ut[re],nt?G&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ne.width,Ne.height,Ue,Xe,Ne.data):t.texImage2D(n.TEXTURE_2D,re,$e,Ne.width,Ne.height,0,Ue,Xe,Ne.data);w.generateMipmaps=!1}else nt?(bt&&t.texStorage2D(n.TEXTURE_2D,Te,$e,pe.width,pe.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe.width,pe.height,Ue,Xe,pe.data)):t.texImage2D(n.TEXTURE_2D,0,$e,pe.width,pe.height,0,Ue,Xe,pe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,$e,ut[0].width,ut[0].height,pe.depth);for(let re=0,he=ut.length;re<he;re++)if(Ne=ut[re],w.format!==Wn)if(Ue!==null)if(nt){if(G)if(w.layerUpdates.size>0){let Ce=Bd(Ne.width,Ne.height,w.format,w.type);for(let Ae of w.layerUpdates){let et=Ne.data.subarray(Ae*Ce/Ne.data.BYTES_PER_ELEMENT,(Ae+1)*Ce/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Ae,Ne.width,Ne.height,1,Ue,et)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Ne.width,Ne.height,pe.depth,Ue,Ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,$e,Ne.width,Ne.height,pe.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Ne.width,Ne.height,pe.depth,Ue,Xe,Ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,$e,Ne.width,Ne.height,pe.depth,0,Ue,Xe,Ne.data)}else{nt&&bt&&t.texStorage2D(n.TEXTURE_2D,Te,$e,ut[0].width,ut[0].height);for(let re=0,he=ut.length;re<he;re++)Ne=ut[re],w.format!==Wn?Ue!==null?nt?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,Ne.width,Ne.height,Ue,Ne.data):t.compressedTexImage2D(n.TEXTURE_2D,re,$e,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?G&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ne.width,Ne.height,Ue,Xe,Ne.data):t.texImage2D(n.TEXTURE_2D,re,$e,Ne.width,Ne.height,0,Ue,Xe,Ne.data)}else if(w.isDataArrayTexture)if(nt){if(bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,$e,pe.width,pe.height,pe.depth),G)if(w.layerUpdates.size>0){let re=Bd(pe.width,pe.height,w.format,w.type);for(let he of w.layerUpdates){let Ce=pe.data.subarray(he*re/pe.data.BYTES_PER_ELEMENT,(he+1)*re/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,pe.width,pe.height,1,Ue,Xe,Ce)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ue,Xe,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,$e,pe.width,pe.height,pe.depth,0,Ue,Xe,pe.data);else if(w.isData3DTexture)nt?(bt&&t.texStorage3D(n.TEXTURE_3D,Te,$e,pe.width,pe.height,pe.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ue,Xe,pe.data)):t.texImage3D(n.TEXTURE_3D,0,$e,pe.width,pe.height,pe.depth,0,Ue,Xe,pe.data);else if(w.isFramebufferTexture){if(bt)if(nt)t.texStorage2D(n.TEXTURE_2D,Te,$e,pe.width,pe.height);else{let re=pe.width,he=pe.height;for(let Ce=0;Ce<Te;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,$e,re,he,0,Ue,Xe,null),re>>=1,he>>=1}}else if(ut.length>0){if(nt&&bt){let re=be(ut[0]);t.texStorage2D(n.TEXTURE_2D,Te,$e,re.width,re.height)}for(let re=0,he=ut.length;re<he;re++)Ne=ut[re],nt?G&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ue,Xe,Ne):t.texImage2D(n.TEXTURE_2D,re,$e,Ue,Xe,Ne);w.generateMipmaps=!1}else if(nt){if(bt){let re=be(pe);t.texStorage2D(n.TEXTURE_2D,Te,$e,re.width,re.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,Xe,pe)}else t.texImage2D(n.TEXTURE_2D,0,$e,Ue,Xe,pe);g(w)&&p(te),Fe.__version=oe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ee(L,w,z){if(w.image.length!==6)return;let te=ve(L,w),ue=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+z);let oe=i.get(ue);if(ue.version!==oe.__version||te===!0){t.activeTexture(n.TEXTURE0+z);let Fe=ft.getPrimaries(ft.workingColorSpace),we=w.colorSpace===Oi?null:ft.getPrimaries(w.colorSpace),Le=w.colorSpace===Oi||Fe===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ct=w.isCompressedTexture||w.image[0].isCompressedTexture,pe=w.image[0]&&w.image[0].isDataTexture,Ue=[];for(let he=0;he<6;he++)!ct&&!pe?Ue[he]=x(w.image[he],!0,s.maxCubemapSize):Ue[he]=pe?w.image[he].image:w.image[he],Ue[he]=De(w,Ue[he]);let Xe=Ue[0],$e=r.convert(w.format,w.colorSpace),Ne=r.convert(w.type),ut=_(w.internalFormat,$e,Ne,w.colorSpace),nt=w.isVideoTexture!==!0,bt=oe.__version===void 0||te===!0,G=ue.dataReady,Te=S(w,Xe);Me(n.TEXTURE_CUBE_MAP,w);let re;if(ct){nt&&bt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,ut,Xe.width,Xe.height);for(let he=0;he<6;he++){re=Ue[he].mipmaps;for(let Ce=0;Ce<re.length;Ce++){let Ae=re[Ce];w.format!==Wn?$e!==null?nt?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,Ae.width,Ae.height,$e,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,ut,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,Ae.width,Ae.height,$e,Ne,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,ut,Ae.width,Ae.height,0,$e,Ne,Ae.data)}}}else{if(re=w.mipmaps,nt&&bt){re.length>0&&Te++;let he=be(Ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,ut,he.width,he.height)}for(let he=0;he<6;he++)if(pe){nt?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ue[he].width,Ue[he].height,$e,Ne,Ue[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,Ue[he].width,Ue[he].height,0,$e,Ne,Ue[he].data);for(let Ce=0;Ce<re.length;Ce++){let et=re[Ce].image[he].image;nt?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,et.width,et.height,$e,Ne,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,ut,et.width,et.height,0,$e,Ne,et.data)}}else{nt?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,$e,Ne,Ue[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,$e,Ne,Ue[he]);for(let Ce=0;Ce<re.length;Ce++){let Ae=re[Ce];nt?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,$e,Ne,Ae.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,ut,$e,Ne,Ae.image[he])}}}g(w)&&p(n.TEXTURE_CUBE_MAP),oe.__version=ue.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ge(L,w,z,te,ue,oe){let Fe=r.convert(z.format,z.colorSpace),we=r.convert(z.type),Le=_(z.internalFormat,Fe,we,z.colorSpace),ct=i.get(w),pe=i.get(z);if(pe.__renderTarget=w,!ct.__hasExternalTextures){let Ue=Math.max(1,w.width>>oe),Xe=Math.max(1,w.height>>oe);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,oe,Le,Ue,Xe,w.depth,0,Fe,we,null):t.texImage2D(ue,oe,Le,Ue,Xe,0,Fe,we,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Z(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ue,pe.__webglTexture,0,se(w)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ue,pe.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(L,w,z){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){let te=w.depthTexture,ue=te&&te.isDepthTexture?te.type:null,oe=y(w.stencilBuffer,ue),Fe=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=se(w);Z(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,oe,w.width,w.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,oe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,oe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Fe,n.RENDERBUFFER,L)}else{let te=w.textures;for(let ue=0;ue<te.length;ue++){let oe=te[ue],Fe=r.convert(oe.format,oe.colorSpace),we=r.convert(oe.type),Le=_(oe.internalFormat,Fe,we,oe.colorSpace),ct=se(w);z&&Z(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,Le,w.width,w.height):Z(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,Le,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Le,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=i.get(w.depthTexture);te.__renderTarget=w,(!te.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);let ue=te.__webglTexture,oe=se(w);if(w.depthTexture.format===Xs)Z(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0);else if(w.depthTexture.format===js)Z(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Q(L){let w=i.get(L),z=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){let te=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),te){let ue=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,te.removeEventListener("dispose",ue)};te.addEventListener("dispose",ue),w.__depthDisposeCallback=ue}w.__boundDepthTexture=te}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");$(w.__webglFramebuffer,L)}else if(z){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]===void 0)w.__webglDepthbuffer[te]=n.createRenderbuffer(),O(w.__webglDepthbuffer[te],L,!1);else{let ue=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),O(w.__webglDepthbuffer,L,!1);else{let te=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,ue)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(L,w,z){let te=i.get(L);w!==void 0&&ge(te.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Q(L)}function Ee(L){let w=L.texture,z=i.get(L),te=i.get(w);L.addEventListener("dispose",T);let ue=L.textures,oe=L.isWebGLCubeRenderTarget===!0,Fe=ue.length>1;if(Fe||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=w.version,o.memory.textures++),oe){z.__webglFramebuffer=[];for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[we]=[];for(let Le=0;Le<w.mipmaps.length;Le++)z.__webglFramebuffer[we][Le]=n.createFramebuffer()}else z.__webglFramebuffer[we]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)z.__webglFramebuffer[we]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Fe)for(let we=0,Le=ue.length;we<Le;we++){let ct=i.get(ue[we]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Z(L)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let we=0;we<ue.length;we++){let Le=ue[we];z.__webglColorRenderbuffer[we]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[we]);let ct=r.convert(Le.format,Le.colorSpace),pe=r.convert(Le.type),Ue=_(Le.internalFormat,ct,pe,Le.colorSpace,L.isXRRenderTarget===!0),Xe=se(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Ue,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,z.__webglColorRenderbuffer[we])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),O(z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Me(n.TEXTURE_CUBE_MAP,w);for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0)for(let Le=0;Le<w.mipmaps.length;Le++)ge(z.__webglFramebuffer[we][Le],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,Le);else ge(z.__webglFramebuffer[we],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);g(w)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let we=0,Le=ue.length;we<Le;we++){let ct=ue[we],pe=i.get(ct);t.bindTexture(n.TEXTURE_2D,pe.__webglTexture),Me(n.TEXTURE_2D,ct),ge(z.__webglFramebuffer,L,ct,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,0),g(ct)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let we=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(we=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,te.__webglTexture),Me(we,w),w.mipmaps&&w.mipmaps.length>0)for(let Le=0;Le<w.mipmaps.length;Le++)ge(z.__webglFramebuffer[Le],L,w,n.COLOR_ATTACHMENT0,we,Le);else ge(z.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,we,0);g(w)&&p(we),t.unbindTexture()}L.depthBuffer&&Q(L)}function j(L){let w=L.textures;for(let z=0,te=w.length;z<te;z++){let ue=w[z];if(g(ue)){let oe=M(L),Fe=i.get(ue).__webglTexture;t.bindTexture(oe,Fe),p(oe),t.unbindTexture()}}}let ce=[],k=[];function xe(L){if(L.samples>0){if(Z(L)===!1){let w=L.textures,z=L.width,te=L.height,ue=n.COLOR_BUFFER_BIT,oe=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=i.get(L),we=w.length>1;if(we)for(let Le=0;Le<w.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Le=0;Le<w.length;Le++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),we){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Le]);let ct=i.get(w[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ct,0)}n.blitFramebuffer(0,0,z,te,0,0,z,te,ue,n.NEAREST),a===!0&&(ce.length=0,k.length=0,ce.push(n.COLOR_ATTACHMENT0+Le),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ce.push(oe),k.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,k)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),we)for(let Le=0;Le<w.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Le]);let ct=i.get(w[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,ct,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&a){let w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function se(L){return Math.min(s.maxSamples,L.samples)}function Z(L){let w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ie(L){let w=o.render.frame;h.get(L)!==w&&(h.set(L,w),L.update())}function De(L,w){let z=L.colorSpace,te=L.format,ue=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||z!==ar&&z!==Oi&&(ft.getTransfer(z)===Mt?(te!==Wn||ue!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function be(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=C,this.resetTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=D,this.setTexture3D=U,this.setTextureCube=R,this.rebindTextures=le,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Z}function a_(n,e){function t(i,s=Oi){let r,o=ft.getTransfer(s);if(i===vi)return n.UNSIGNED_BYTE;if(i===Gh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===df)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hf)return n.BYTE;if(i===uf)return n.SHORT;if(i===Jr)return n.UNSIGNED_SHORT;if(i===Vh)return n.INT;if(i===us)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===ao)return n.HALF_FLOAT;if(i===ff)return n.ALPHA;if(i===pf)return n.RGB;if(i===Wn)return n.RGBA;if(i===mf)return n.LUMINANCE;if(i===gf)return n.LUMINANCE_ALPHA;if(i===Xs)return n.DEPTH_COMPONENT;if(i===js)return n.DEPTH_STENCIL;if(i===or)return n.RED;if(i===Xh)return n.RED_INTEGER;if(i===xf)return n.RG;if(i===qh)return n.RG_INTEGER;if(i===$h)return n.RGBA_INTEGER;if(i===ra||i===oa||i===aa||i===ca)if(o===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rl||i===Cl||i===Pl||i===Il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ll||i===Dl||i===Ul)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ll||i===Dl)return o===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ul)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nl||i===Hl||i===Fl||i===kl||i===Ol||i===Bl||i===zl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===$l||i===Yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Nl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ol)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ql)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$l)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===la||i===Zl||i===Kl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===la)return o===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yf||i===Jl||i===jl||i===Ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===la)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Js?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var mh=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ae=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},c_={type:"move"},$r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,c=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&u>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(c_)))}return c!==null&&(c.visible=s!==null),a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ae;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},l_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Tn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Vt({vertexShader:l_,fragmentShader:h_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new me(new Gt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xh=class extends Xi{constructor(e,t){super();let i=this,s=null,r=1,o=null,c="local-floor",a=1,l=null,h=null,f=null,u=null,d=null,m=null,x=new gh,g=t.getContextAttributes(),p=null,M=null,_=[],y=[],S=new fe,v=null,T=new $t;T.viewport=new Ot;let P=new $t;P.viewport=new Ot;let b=[T,P],E=new mh,N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=_[q];return ee===void 0&&(ee=new $r,_[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=_[q];return ee===void 0&&(ee=new $r,_[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=_[q];return ee===void 0&&(ee=new $r,_[q]=ee),ee.getHandSpace()};function C(q){let ee=y.indexOf(q.inputSource);if(ee===-1)return;let ge=_[ee];ge!==void 0&&(ge.update(q.inputSource,q.frame,l||o),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",V);for(let q=0;q<_.length;q++){let ee=y[q];ee!==null&&(y[q]=null,_[q].disconnect(ee))}N=null,F=null,x.reset(),e.setRenderTarget(p),d=null,u=null,f=null,s=null,M=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){c=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",H),s.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0){let ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new _i(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ee=null,ge=null,O=null;g.depth&&(O=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=g.stencil?js:Xs,ge=g.stencil?Js:us);let $={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:r};f=new XRWebGLBinding(s,t),u=f.createProjectionLayer($),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new _i(u.textureWidth,u.textureHeight,{format:Wn,type:vi,depthTexture:new Ma(u.textureWidth,u.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(a),l=null,o=await s.requestReferenceSpace(c),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(q){for(let ee=0;ee<q.removed.length;ee++){let ge=q.removed[ee],O=y.indexOf(ge);O>=0&&(y[O]=null,_[O].disconnect(ge))}for(let ee=0;ee<q.added.length;ee++){let ge=q.added[ee],O=y.indexOf(ge);if(O===-1){for(let Q=0;Q<_.length;Q++)if(Q>=y.length){y.push(ge),O=Q;break}else if(y[Q]===null){y[Q]=ge,O=Q;break}if(O===-1)break}let $=_[O];$&&$.connect(ge)}}let D=new A,U=new A;function R(q,ee,ge){D.setFromMatrixPosition(ee.matrixWorld),U.setFromMatrixPosition(ge.matrixWorld);let O=D.distanceTo(U),$=ee.projectionMatrix.elements,Q=ge.projectionMatrix.elements,le=$[14]/($[10]-1),Ee=$[14]/($[10]+1),j=($[9]+1)/$[5],ce=($[9]-1)/$[5],k=($[8]-1)/$[0],xe=(Q[8]+1)/Q[0],se=le*k,Z=le*xe,ie=O/(-k+xe),De=ie*-k;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(De),q.translateZ(ie),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),$[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let be=le+ie,L=Ee+ie,w=se-De,z=Z+(O-De),te=j*Ee/L*be,ue=ce*Ee/L*be;q.projectionMatrix.makePerspective(w,z,te,ue,be,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Y(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ee=q.near,ge=q.far;x.texture!==null&&(x.depthNear>0&&(ee=x.depthNear),x.depthFar>0&&(ge=x.depthFar)),E.near=P.near=T.near=ee,E.far=P.far=T.far=ge,(N!==E.near||F!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),N=E.near,F=E.far),T.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,E.layers.mask=T.layers.mask|P.layers.mask;let O=q.parent,$=E.cameras;Y(E,O);for(let Q=0;Q<$.length;Q++)Y($[Q],O);$.length===2?R(E,T,P):E.projectionMatrix.copy(T.projectionMatrix),ne(q,E,O)};function ne(q,ee,ge){ge===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=jr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&d===null))return a},this.setFoveation=function(q){a=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let de=null;function Me(q,ee){if(h=ee.getViewerPose(l||o),m=ee,h!==null){let ge=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let O=!1;ge.length!==E.cameras.length&&(E.cameras.length=0,O=!0);for(let Q=0;Q<ge.length;Q++){let le=ge[Q],Ee=null;if(d!==null)Ee=d.getViewport(le);else{let ce=f.getViewSubImage(u,le);Ee=ce.viewport,Q===0&&(e.setRenderTargetTextures(M,ce.colorTexture,u.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(M))}let j=b[Q];j===void 0&&(j=new $t,j.layers.enable(Q),j.viewport=new Ot,b[Q]=j),j.matrix.fromArray(le.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(le.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Q===0&&(E.matrix.copy(j.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),O===!0&&E.cameras.push(j)}let $=s.enabledFeatures;if($&&$.includes("depth-sensing")){let Q=f.getDepthInformation(ge[0]);Q&&Q.isValid&&Q.texture&&x.init(e,Q,s.renderState)}}for(let ge=0;ge<_.length;ge++){let O=y[ge],$=_[ge];O!==null&&$!==void 0&&$.update(O,ee,l||o)}de&&de(q,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),m=null}let ve=new Sf;ve.setAnimationLoop(Me),this.setAnimationLoop=function(q){de=q},this.dispose=function(){}}},rs=new vn,u_=new at;function d_(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,bf(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&c(g,p)):p.isPointsMaterial?a(g,p,M,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Bt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Bt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),_=M.envMap,y=M.envMapRotation;_&&(g.envMap.value=_,rs.copy(y),rs.x*=-1,rs.y*=-1,rs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),g.envMapRotation.value.setFromMatrix4(u_.makeRotationFromEuler(rs)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function c(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function a(g,p,M,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function f_(n,e,t,i){let s={},r={},o=[],c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function a(M,_){let y=_.program;i.uniformBlockBinding(M,y)}function l(M,_){let y=s[M.id];y===void 0&&(m(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",g));let S=_.program;i.updateUBOMapping(M,S);let v=e.render.frame;r[M.id]!==v&&(u(M),r[M.id]=v)}function h(M){let _=f();M.__bindingPointIndex=_;let y=n.createBuffer(),S=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,S,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function f(){for(let M=0;M<c;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let _=s[M.id],y=M.uniforms,S=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let v=0,T=y.length;v<T;v++){let P=Array.isArray(y[v])?y[v]:[y[v]];for(let b=0,E=P.length;b<E;b++){let N=P[b];if(d(N,v,b,S)===!0){let F=N.__offset,C=Array.isArray(N.value)?N.value:[N.value],H=0;for(let V=0;V<C.length;V++){let D=C[V],U=x(D);typeof D=="number"||typeof D=="boolean"?(N.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,F+H,N.__data)):D.isMatrix3?(N.__data[0]=D.elements[0],N.__data[1]=D.elements[1],N.__data[2]=D.elements[2],N.__data[3]=0,N.__data[4]=D.elements[3],N.__data[5]=D.elements[4],N.__data[6]=D.elements[5],N.__data[7]=0,N.__data[8]=D.elements[6],N.__data[9]=D.elements[7],N.__data[10]=D.elements[8],N.__data[11]=0):(D.toArray(N.__data,H),H+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,_,y,S){let v=M.value,T=_+"_"+y;if(S[T]===void 0)return typeof v=="number"||typeof v=="boolean"?S[T]=v:S[T]=v.clone(),!0;{let P=S[T];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return S[T]=v,!0}else if(P.equals(v)===!1)return P.copy(v),!0}return!1}function m(M){let _=M.uniforms,y=0,S=16;for(let T=0,P=_.length;T<P;T++){let b=Array.isArray(_[T])?_[T]:[_[T]];for(let E=0,N=b.length;E<N;E++){let F=b[E],C=Array.isArray(F.value)?F.value:[F.value];for(let H=0,V=C.length;H<V;H++){let D=C[H],U=x(D),R=y%S,Y=R%U.boundary,ne=R+Y;y+=Y,ne!==0&&S-ne<U.storage&&(y+=S-ne),F.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=U.storage}}}let v=y%S;return v>0&&(y+=S-v),M.__size=y,M.__cache={},this}function x(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){let _=M.target;_.removeEventListener("dispose",g);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:a,update:l,dispose:p}}var ds=class{constructor(e={}){let{canvas:t=ym(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,M=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=Gi,this.toneMappingExposure=1;let y=this,S=!1,v=0,T=0,P=null,b=-1,E=null,N=new Ot,F=new Ot,C=null,H=new Ie(0),V=0,D=t.width,U=t.height,R=1,Y=null,ne=null,de=new Ot(0,0,D,U),Me=new Ot(0,0,D,U),ve=!1,q=new eo,ee=!1,ge=!1,O=new at,$=new at,Q=new A,le=new Ot,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function ce(){return P===null?R:1}let k=i;function xe(I,W){return t.getContext(I,W)}try{let I={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),k===null){let W="webgl2";if(k=xe(W,I),k===null)throw xe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let se,Z,ie,De,be,L,w,z,te,ue,oe,Fe,we,Le,ct,pe,Ue,Xe,$e,Ne,ut,nt,bt,G;function Te(){se=new Cy(k),se.init(),nt=new a_(k,se),Z=new by(k,se,e,nt),ie=new s_(k,se),Z.reverseDepthBuffer&&u&&ie.buffers.depth.setReversed(!0),De=new Ly(k),be=new Xv,L=new o_(k,se,ie,be,Z,nt,De),w=new wy(y),z=new Ry(y),te=new Om(k),bt=new My(k,te),ue=new Py(k,te,De,bt),oe=new Uy(k,ue,te,De),$e=new Dy(k,Z,L),pe=new Sy(be),Fe=new Wv(y,w,z,se,Z,bt,pe),we=new d_(y,be),Le=new $v,ct=new Qv(se),Xe=new _y(y,w,z,ie,oe,d,a),Ue=new n_(y,oe,Z),G=new f_(k,De,Z,ie),Ne=new Ey(k,se,De),ut=new Iy(k,se,De),De.programs=Fe.programs,y.capabilities=Z,y.extensions=se,y.properties=be,y.renderLists=Le,y.shadowMap=Ue,y.state=ie,y.info=De}Te();let re=new xh(y,k);this.xr=re,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let I=se.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=se.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(I){I!==void 0&&(R=I,this.setSize(D,U,!1))},this.getSize=function(I){return I.set(D,U)},this.setSize=function(I,W,K=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=I,U=W,t.width=Math.floor(I*R),t.height=Math.floor(W*R),K===!0&&(t.style.width=I+"px",t.style.height=W+"px"),this.setViewport(0,0,I,W)},this.getDrawingBufferSize=function(I){return I.set(D*R,U*R).floor()},this.setDrawingBufferSize=function(I,W,K){D=I,U=W,R=K,t.width=Math.floor(I*K),t.height=Math.floor(W*K),this.setViewport(0,0,I,W)},this.getCurrentViewport=function(I){return I.copy(N)},this.getViewport=function(I){return I.copy(de)},this.setViewport=function(I,W,K,J){I.isVector4?de.set(I.x,I.y,I.z,I.w):de.set(I,W,K,J),ie.viewport(N.copy(de).multiplyScalar(R).round())},this.getScissor=function(I){return I.copy(Me)},this.setScissor=function(I,W,K,J){I.isVector4?Me.set(I.x,I.y,I.z,I.w):Me.set(I,W,K,J),ie.scissor(F.copy(Me).multiplyScalar(R).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(I){ie.setScissorTest(ve=I)},this.setOpaqueSort=function(I){Y=I},this.setTransparentSort=function(I){ne=I},this.getClearColor=function(I){return I.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(I=!0,W=!0,K=!0){let J=0;if(I){let X=!1;if(P!==null){let ye=P.texture.format;X=ye===$h||ye===qh||ye===Xh}if(X){let ye=P.texture.type,Re=ye===vi||ye===us||ye===Jr||ye===Js||ye===Gh||ye===Wh,ke=Xe.getClearColor(),Oe=Xe.getClearAlpha(),Ze=ke.r,tt=ke.g,Be=ke.b;Re?(m[0]=Ze,m[1]=tt,m[2]=Be,m[3]=Oe,k.clearBufferuiv(k.COLOR,0,m)):(x[0]=Ze,x[1]=tt,x[2]=Be,x[3]=Oe,k.clearBufferiv(k.COLOR,0,x))}else J|=k.COLOR_BUFFER_BIT}W&&(J|=k.DEPTH_BUFFER_BIT),K&&(J|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Le.dispose(),ct.dispose(),be.dispose(),w.dispose(),z.dispose(),oe.dispose(),bt.dispose(),G.dispose(),Fe.dispose(),re.dispose(),re.removeEventListener("sessionstart",Uu),re.removeEventListener("sessionend",Nu),Qi.stop()};function he(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let I=De.autoReset,W=Ue.enabled,K=Ue.autoUpdate,J=Ue.needsUpdate,X=Ue.type;Te(),De.autoReset=I,Ue.enabled=W,Ue.autoUpdate=K,Ue.needsUpdate=J,Ue.type=X}function Ae(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function et(I){let W=I.target;W.removeEventListener("dispose",et),kt(W)}function kt(I){dn(I),be.remove(I)}function dn(I){let W=be.get(I).programs;W!==void 0&&(W.forEach(function(K){Fe.releaseProgram(K)}),I.isShaderMaterial&&Fe.releaseShaderCache(I))}this.renderBufferDirect=function(I,W,K,J,X,ye){W===null&&(W=Ee);let Re=X.isMesh&&X.matrixWorld.determinant()<0,ke=d0(I,W,K,J,X);ie.setMaterial(J,Re);let Oe=K.index,Ze=1;if(J.wireframe===!0){if(Oe=ue.getWireframeAttribute(K),Oe===void 0)return;Ze=2}let tt=K.drawRange,Be=K.attributes.position,pt=tt.start*Ze,St=(tt.start+tt.count)*Ze;ye!==null&&(pt=Math.max(pt,ye.start*Ze),St=Math.min(St,(ye.start+ye.count)*Ze)),Oe!==null?(pt=Math.max(pt,0),St=Math.min(St,Oe.count)):Be!=null&&(pt=Math.max(pt,0),St=Math.min(St,Be.count));let Tt=St-pt;if(Tt<0||Tt===1/0)return;bt.setup(X,J,ke,K,Oe);let wn,xt=Ne;if(Oe!==null&&(wn=te.get(Oe),xt=ut,xt.setIndex(wn)),X.isMesh)J.wireframe===!0?(ie.setLineWidth(J.wireframeLinewidth*ce()),xt.setMode(k.LINES)):xt.setMode(k.TRIANGLES);else if(X.isLine){let Ve=J.linewidth;Ve===void 0&&(Ve=1),ie.setLineWidth(Ve*ce()),X.isLineSegments?xt.setMode(k.LINES):X.isLineLoop?xt.setMode(k.LINE_LOOP):xt.setMode(k.LINE_STRIP)}else X.isPoints?xt.setMode(k.POINTS):X.isSprite&&xt.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)xt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))xt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Ve=X._multiDrawStarts,hi=X._multiDrawCounts,yt=X._multiDrawCount,kn=Oe?te.get(Oe).bytesPerElement:1,bs=be.get(J).currentProgram.getUniforms();for(let Cn=0;Cn<yt;Cn++)bs.setValue(k,"_gl_DrawID",Cn),xt.render(Ve[Cn]/kn,hi[Cn])}else if(X.isInstancedMesh)xt.renderInstances(pt,Tt,X.count);else if(K.isInstancedBufferGeometry){let Ve=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,hi=Math.min(K.instanceCount,Ve);xt.renderInstances(pt,Tt,hi)}else xt.render(pt,Tt)};function vt(I,W,K){I.transparent===!0&&I.side===ot&&I.forceSinglePass===!1?(I.side=Bt,I.needsUpdate=!0,wo(I,W,K),I.side=ri,I.needsUpdate=!0,wo(I,W,K),I.side=ot):wo(I,W,K)}this.compile=function(I,W,K=null){K===null&&(K=I),p=ct.get(K),p.init(W),_.push(p),K.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),I!==K&&I.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let J=new Set;return I.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ye=X.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){let ke=ye[Re];vt(ke,K,X),J.add(ke)}else vt(ye,K,X),J.add(ye)}),_.pop(),p=null,J},this.compileAsync=function(I,W,K=null){let J=this.compile(I,W,K);return new Promise(X=>{function ye(){if(J.forEach(function(Re){be.get(Re).currentProgram.isReady()&&J.delete(Re)}),J.size===0){X(I);return}setTimeout(ye,10)}se.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Fn=null;function li(I){Fn&&Fn(I)}function Uu(){Qi.stop()}function Nu(){Qi.start()}let Qi=new Sf;Qi.setAnimationLoop(li),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(I){Fn=I,re.setAnimationLoop(I),I===null?Qi.stop():Qi.start()},re.addEventListener("sessionstart",Uu),re.addEventListener("sessionend",Nu),this.render=function(I,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(W),W=re.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,W,P),p=ct.get(I,_.length),p.init(W),_.push(p),$.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix($),ge=this.localClippingEnabled,ee=pe.init(this.clippingPlanes,ge),g=Le.get(I,M.length),g.init(),M.push(g),re.enabled===!0&&re.isPresenting===!0){let ye=y.xr.getDepthSensingMesh();ye!==null&&Nc(ye,W,-1/0,y.sortObjects)}Nc(I,W,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(Y,ne),j=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,j&&Xe.addToRenderList(g,I),this.info.render.frame++,ee===!0&&pe.beginShadows();let K=p.state.shadowsArray;Ue.render(K,I,W),ee===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=g.opaque,X=g.transmissive;if(p.setupLights(),W.isArrayCamera){let ye=W.cameras;if(X.length>0)for(let Re=0,ke=ye.length;Re<ke;Re++){let Oe=ye[Re];Fu(J,X,I,Oe)}j&&Xe.render(I);for(let Re=0,ke=ye.length;Re<ke;Re++){let Oe=ye[Re];Hu(g,I,Oe,Oe.viewport)}}else X.length>0&&Fu(J,X,I,W),j&&Xe.render(I),Hu(g,I,W);P!==null&&(L.updateMultisampleRenderTarget(P),L.updateRenderTargetMipmap(P)),I.isScene===!0&&I.onAfterRender(y,I,W),bt.resetDefaultState(),b=-1,E=null,_.pop(),_.length>0?(p=_[_.length-1],ee===!0&&pe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Nc(I,W,K,J){if(I.visible===!1)return;if(I.layers.test(W.layers)){if(I.isGroup)K=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(W);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||q.intersectsSprite(I)){J&&le.setFromMatrixPosition(I.matrixWorld).applyMatrix4($);let Re=oe.update(I),ke=I.material;ke.visible&&g.push(I,Re,ke,K,le.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||q.intersectsObject(I))){let Re=oe.update(I),ke=I.material;if(J&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),le.copy(I.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),le.copy(Re.boundingSphere.center)),le.applyMatrix4(I.matrixWorld).applyMatrix4($)),Array.isArray(ke)){let Oe=Re.groups;for(let Ze=0,tt=Oe.length;Ze<tt;Ze++){let Be=Oe[Ze],pt=ke[Be.materialIndex];pt&&pt.visible&&g.push(I,Re,pt,K,le.z,Be)}}else ke.visible&&g.push(I,Re,ke,K,le.z,null)}}let ye=I.children;for(let Re=0,ke=ye.length;Re<ke;Re++)Nc(ye[Re],W,K,J)}function Hu(I,W,K,J){let X=I.opaque,ye=I.transmissive,Re=I.transparent;p.setupLightsView(K),ee===!0&&pe.setGlobalState(y.clippingPlanes,K),J&&ie.viewport(N.copy(J)),X.length>0&&So(X,W,K),ye.length>0&&So(ye,W,K),Re.length>0&&So(Re,W,K),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Fu(I,W,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new _i(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?ao:vi,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let ye=p.state.transmissionRenderTarget[J.id],Re=J.viewport||N;ye.setSize(Re.z,Re.w);let ke=y.getRenderTarget();y.setRenderTarget(ye),y.getClearColor(H),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),j&&Xe.render(K);let Oe=y.toneMapping;y.toneMapping=Gi;let Ze=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),ee===!0&&pe.setGlobalState(y.clippingPlanes,J),So(I,K,J),L.updateMultisampleRenderTarget(ye),L.updateRenderTargetMipmap(ye),se.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Be=0,pt=W.length;Be<pt;Be++){let St=W[Be],Tt=St.object,wn=St.geometry,xt=St.material,Ve=St.group;if(xt.side===ot&&Tt.layers.test(J.layers)){let hi=xt.side;xt.side=Bt,xt.needsUpdate=!0,ku(Tt,K,J,wn,xt,Ve),xt.side=hi,xt.needsUpdate=!0,tt=!0}}tt===!0&&(L.updateMultisampleRenderTarget(ye),L.updateRenderTargetMipmap(ye))}y.setRenderTarget(ke),y.setClearColor(H,V),Ze!==void 0&&(J.viewport=Ze),y.toneMapping=Oe}function So(I,W,K){let J=W.isScene===!0?W.overrideMaterial:null;for(let X=0,ye=I.length;X<ye;X++){let Re=I[X],ke=Re.object,Oe=Re.geometry,Ze=J===null?Re.material:J,tt=Re.group;ke.layers.test(K.layers)&&ku(ke,W,K,Oe,Ze,tt)}}function ku(I,W,K,J,X,ye){I.onBeforeRender(y,W,K,J,X,ye),I.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),X.onBeforeRender(y,W,K,J,I,ye),X.transparent===!0&&X.side===ot&&X.forceSinglePass===!1?(X.side=Bt,X.needsUpdate=!0,y.renderBufferDirect(K,W,J,X,I,ye),X.side=ri,X.needsUpdate=!0,y.renderBufferDirect(K,W,J,X,I,ye),X.side=ot):y.renderBufferDirect(K,W,J,X,I,ye),I.onAfterRender(y,W,K,J,X,ye)}function wo(I,W,K){W.isScene!==!0&&(W=Ee);let J=be.get(I),X=p.state.lights,ye=p.state.shadowsArray,Re=X.state.version,ke=Fe.getParameters(I,X.state,ye,W,K),Oe=Fe.getProgramCacheKey(ke),Ze=J.programs;J.environment=I.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(I.isMeshStandardMaterial?z:w).get(I.envMap||J.environment),J.envMapRotation=J.environment!==null&&I.envMap===null?W.environmentRotation:I.envMapRotation,Ze===void 0&&(I.addEventListener("dispose",et),Ze=new Map,J.programs=Ze);let tt=Ze.get(Oe);if(tt!==void 0){if(J.currentProgram===tt&&J.lightsStateVersion===Re)return Bu(I,ke),tt}else ke.uniforms=Fe.getUniforms(I),I.onBeforeCompile(ke,y),tt=Fe.acquireProgram(ke,Oe),Ze.set(Oe,tt),J.uniforms=ke.uniforms;let Be=J.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Be.clippingPlanes=pe.uniform),Bu(I,ke),J.needsLights=p0(I),J.lightsStateVersion=Re,J.needsLights&&(Be.ambientLightColor.value=X.state.ambient,Be.lightProbe.value=X.state.probe,Be.directionalLights.value=X.state.directional,Be.directionalLightShadows.value=X.state.directionalShadow,Be.spotLights.value=X.state.spot,Be.spotLightShadows.value=X.state.spotShadow,Be.rectAreaLights.value=X.state.rectArea,Be.ltc_1.value=X.state.rectAreaLTC1,Be.ltc_2.value=X.state.rectAreaLTC2,Be.pointLights.value=X.state.point,Be.pointLightShadows.value=X.state.pointShadow,Be.hemisphereLights.value=X.state.hemi,Be.directionalShadowMap.value=X.state.directionalShadowMap,Be.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Be.spotShadowMap.value=X.state.spotShadowMap,Be.spotLightMatrix.value=X.state.spotLightMatrix,Be.spotLightMap.value=X.state.spotLightMap,Be.pointShadowMap.value=X.state.pointShadowMap,Be.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=tt,J.uniformsList=null,tt}function Ou(I){if(I.uniformsList===null){let W=I.currentProgram.getUniforms();I.uniformsList=$s.seqWithValue(W.seq,I.uniforms)}return I.uniformsList}function Bu(I,W){let K=be.get(I);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function d0(I,W,K,J,X){W.isScene!==!0&&(W=Ee),L.resetTextureUnits();let ye=W.fog,Re=J.isMeshStandardMaterial?W.environment:null,ke=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ar,Oe=(J.isMeshStandardMaterial?z:w).get(J.envMap||Re),Ze=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,tt=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Be=!!K.morphAttributes.position,pt=!!K.morphAttributes.normal,St=!!K.morphAttributes.color,Tt=Gi;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Tt=y.toneMapping);let wn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,xt=wn!==void 0?wn.length:0,Ve=be.get(J),hi=p.state.lights;if(ee===!0&&(ge===!0||I!==E)){let Ln=I===E&&J.id===b;pe.setState(J,I,Ln)}let yt=!1;J.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==hi.state.version||Ve.outputColorSpace!==ke||X.isBatchedMesh&&Ve.batching===!1||!X.isBatchedMesh&&Ve.batching===!0||X.isBatchedMesh&&Ve.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ve.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ve.instancing===!1||!X.isInstancedMesh&&Ve.instancing===!0||X.isSkinnedMesh&&Ve.skinning===!1||!X.isSkinnedMesh&&Ve.skinning===!0||X.isInstancedMesh&&Ve.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ve.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ve.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ve.instancingMorph===!1&&X.morphTexture!==null||Ve.envMap!==Oe||J.fog===!0&&Ve.fog!==ye||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==pe.numPlanes||Ve.numIntersection!==pe.numIntersection)||Ve.vertexAlphas!==Ze||Ve.vertexTangents!==tt||Ve.morphTargets!==Be||Ve.morphNormals!==pt||Ve.morphColors!==St||Ve.toneMapping!==Tt||Ve.morphTargetsCount!==xt)&&(yt=!0):(yt=!0,Ve.__version=J.version);let kn=Ve.currentProgram;yt===!0&&(kn=wo(J,W,X));let bs=!1,Cn=!1,Ir=!1,At=kn.getUniforms(),ei=Ve.uniforms;if(ie.useProgram(kn.program)&&(bs=!0,Cn=!0,Ir=!0),J.id!==b&&(b=J.id,Cn=!0),bs||E!==I){ie.buffers.depth.getReversed()?(O.copy(I.projectionMatrix),_m(O),Mm(O),At.setValue(k,"projectionMatrix",O)):At.setValue(k,"projectionMatrix",I.projectionMatrix),At.setValue(k,"viewMatrix",I.matrixWorldInverse);let Ii=At.map.cameraPosition;Ii!==void 0&&Ii.setValue(k,Q.setFromMatrixPosition(I.matrixWorld)),Z.logarithmicDepthBuffer&&At.setValue(k,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&At.setValue(k,"isOrthographic",I.isOrthographicCamera===!0),E!==I&&(E=I,Cn=!0,Ir=!0)}if(X.isSkinnedMesh){At.setOptional(k,X,"bindMatrix"),At.setOptional(k,X,"bindMatrixInverse");let Ln=X.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),At.setValue(k,"boneTexture",Ln.boneTexture,L))}X.isBatchedMesh&&(At.setOptional(k,X,"batchingTexture"),At.setValue(k,"batchingTexture",X._matricesTexture,L),At.setOptional(k,X,"batchingIdTexture"),At.setValue(k,"batchingIdTexture",X._indirectTexture,L),At.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&At.setValue(k,"batchingColorTexture",X._colorsTexture,L));let Lr=K.morphAttributes;if((Lr.position!==void 0||Lr.normal!==void 0||Lr.color!==void 0)&&$e.update(X,K,kn),(Cn||Ve.receiveShadow!==X.receiveShadow)&&(Ve.receiveShadow=X.receiveShadow,At.setValue(k,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ei.envMap.value=Oe,ei.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(ei.envMapIntensity.value=W.environmentIntensity),Cn&&(At.setValue(k,"toneMappingExposure",y.toneMappingExposure),Ve.needsLights&&f0(ei,Ir),ye&&J.fog===!0&&we.refreshFogUniforms(ei,ye),we.refreshMaterialUniforms(ei,J,R,U,p.state.transmissionRenderTarget[I.id]),$s.upload(k,Ou(Ve),ei,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&($s.upload(k,Ou(Ve),ei,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&At.setValue(k,"center",X.center),At.setValue(k,"modelViewMatrix",X.modelViewMatrix),At.setValue(k,"normalMatrix",X.normalMatrix),At.setValue(k,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Ln=J.uniformsGroups;for(let Ii=0,Li=Ln.length;Ii<Li;Ii++){let zu=Ln[Ii];G.update(zu,kn),G.bind(zu,kn)}}return kn}function f0(I,W){I.ambientLightColor.needsUpdate=W,I.lightProbe.needsUpdate=W,I.directionalLights.needsUpdate=W,I.directionalLightShadows.needsUpdate=W,I.pointLights.needsUpdate=W,I.pointLightShadows.needsUpdate=W,I.spotLights.needsUpdate=W,I.spotLightShadows.needsUpdate=W,I.rectAreaLights.needsUpdate=W,I.hemisphereLights.needsUpdate=W}function p0(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(I,W,K){be.get(I.texture).__webglTexture=W,be.get(I.depthTexture).__webglTexture=K;let J=be.get(I);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,W){let K=be.get(I);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(I,W=0,K=0){P=I,v=W,T=K;let J=!0,X=null,ye=!1,Re=!1;if(I){let Oe=be.get(I);if(Oe.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(k.FRAMEBUFFER,null),J=!1;else if(Oe.__webglFramebuffer===void 0)L.setupRenderTarget(I);else if(Oe.__hasExternalTextures)L.rebindTextures(I,be.get(I.texture).__webglTexture,be.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Be=I.depthTexture;if(Oe.__boundDepthTexture!==Be){if(Be!==null&&be.has(Be)&&(I.width!==Be.image.width||I.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(I)}}let Ze=I.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Re=!0);let tt=be.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(tt[W])?X=tt[W][K]:X=tt[W],ye=!0):I.samples>0&&L.useMultisampledRTT(I)===!1?X=be.get(I).__webglMultisampledFramebuffer:Array.isArray(tt)?X=tt[K]:X=tt,N.copy(I.viewport),F.copy(I.scissor),C=I.scissorTest}else N.copy(de).multiplyScalar(R).floor(),F.copy(Me).multiplyScalar(R).floor(),C=ve;if(ie.bindFramebuffer(k.FRAMEBUFFER,X)&&J&&ie.drawBuffers(I,X),ie.viewport(N),ie.scissor(F),ie.setScissorTest(C),ye){let Oe=be.get(I.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,K)}else if(Re){let Oe=be.get(I.texture),Ze=W||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.__webglTexture,K||0,Ze)}b=-1},this.readRenderTargetPixels=function(I,W,K,J,X,ye,Re){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=be.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Re!==void 0&&(ke=ke[Re]),ke){ie.bindFramebuffer(k.FRAMEBUFFER,ke);try{let Oe=I.texture,Ze=Oe.format,tt=Oe.type;if(!Z.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=I.width-J&&K>=0&&K<=I.height-X&&k.readPixels(W,K,J,X,nt.convert(Ze),nt.convert(tt),ye)}finally{let Oe=P!==null?be.get(P).__webglFramebuffer:null;ie.bindFramebuffer(k.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(I,W,K,J,X,ye,Re){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=be.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Re!==void 0&&(ke=ke[Re]),ke){let Oe=I.texture,Ze=Oe.format,tt=Oe.type;if(!Z.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=I.width-J&&K>=0&&K<=I.height-X){ie.bindFramebuffer(k.FRAMEBUFFER,ke);let Be=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Be),k.bufferData(k.PIXEL_PACK_BUFFER,ye.byteLength,k.STREAM_READ),k.readPixels(W,K,J,X,nt.convert(Ze),nt.convert(tt),0);let pt=P!==null?be.get(P).__webglFramebuffer:null;ie.bindFramebuffer(k.FRAMEBUFFER,pt);let St=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await vm(k,St,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Be),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ye),k.deleteBuffer(Be),k.deleteSync(St),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,W=null,K=0){I.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,I=arguments[1]);let J=Math.pow(2,-K),X=Math.floor(I.image.width*J),ye=Math.floor(I.image.height*J),Re=W!==null?W.x:0,ke=W!==null?W.y:0;L.setTexture2D(I,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,Re,ke,X,ye),ie.unbindTexture()},this.copyTextureToTexture=function(I,W,K=null,J=null,X=0){I.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,I=arguments[1],W=arguments[2],X=arguments[3]||0,K=null);let ye,Re,ke,Oe,Ze,tt,Be,pt,St,Tt=I.isCompressedTexture?I.mipmaps[X]:I.image;K!==null?(ye=K.max.x-K.min.x,Re=K.max.y-K.min.y,ke=K.isBox3?K.max.z-K.min.z:1,Oe=K.min.x,Ze=K.min.y,tt=K.isBox3?K.min.z:0):(ye=Tt.width,Re=Tt.height,ke=Tt.depth||1,Oe=0,Ze=0,tt=0),J!==null?(Be=J.x,pt=J.y,St=J.z):(Be=0,pt=0,St=0);let wn=nt.convert(W.format),xt=nt.convert(W.type),Ve;W.isData3DTexture?(L.setTexture3D(W,0),Ve=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),Ve=k.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),Ve=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);let hi=k.getParameter(k.UNPACK_ROW_LENGTH),yt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),kn=k.getParameter(k.UNPACK_SKIP_PIXELS),bs=k.getParameter(k.UNPACK_SKIP_ROWS),Cn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Tt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Tt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Oe),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ze),k.pixelStorei(k.UNPACK_SKIP_IMAGES,tt);let Ir=I.isDataArrayTexture||I.isData3DTexture,At=W.isDataArrayTexture||W.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let ei=be.get(I),Lr=be.get(W),Ln=be.get(ei.__renderTarget),Ii=be.get(Lr.__renderTarget);ie.bindFramebuffer(k.READ_FRAMEBUFFER,Ln.__webglFramebuffer),ie.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Li=0;Li<ke;Li++)Ir&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,be.get(I).__webglTexture,X,tt+Li),I.isDepthTexture?(At&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,be.get(W).__webglTexture,X,St+Li),k.blitFramebuffer(Oe,Ze,ye,Re,Be,pt,ye,Re,k.DEPTH_BUFFER_BIT,k.NEAREST)):At?k.copyTexSubImage3D(Ve,X,Be,pt,St+Li,Oe,Ze,ye,Re):k.copyTexSubImage2D(Ve,X,Be,pt,St+Li,Oe,Ze,ye,Re);ie.bindFramebuffer(k.READ_FRAMEBUFFER,null),ie.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else At?I.isDataTexture||I.isData3DTexture?k.texSubImage3D(Ve,X,Be,pt,St,ye,Re,ke,wn,xt,Tt.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Ve,X,Be,pt,St,ye,Re,ke,wn,Tt.data):k.texSubImage3D(Ve,X,Be,pt,St,ye,Re,ke,wn,xt,Tt):I.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,Be,pt,ye,Re,wn,xt,Tt.data):I.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,Be,pt,Tt.width,Tt.height,wn,Tt.data):k.texSubImage2D(k.TEXTURE_2D,X,Be,pt,ye,Re,wn,xt,Tt);k.pixelStorei(k.UNPACK_ROW_LENGTH,hi),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,yt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,kn),k.pixelStorei(k.UNPACK_SKIP_ROWS,bs),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Cn),X===0&&W.generateMipmaps&&k.generateMipmap(Ve),ie.unbindTexture()},this.copyTextureToTexture3D=function(I,W,K=null,J=null,X=0){return I.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,I=arguments[2],W=arguments[3],X=arguments[4]||0),Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,W,K,J,X)},this.initRenderTarget=function(I){be.get(I).__webglFramebuffer===void 0&&L.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?L.setTextureCube(I,0):I.isData3DTexture?L.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?L.setTexture2DArray(I,0):L.setTexture2D(I,0),ie.unbindTexture()},this.resetState=function(){v=0,T=0,P=null,ie.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var Ea=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ei=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},yh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=th,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new A,ba=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fs=class extends oi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ks,Fr=new A,Os=new A,Bs=new A,zs=new fe,kr=new fe,Cf=new at,$o=new A,Or=new A,Yo=new A,zd=new fe,hl=new fe,Vd=new fe,tr=class extends nn{constructor(e=new fs){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new yh(t,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new ba(i,3,0,!1)),ks.setAttribute("uv",new ba(i,2,3,!1))}this.geometry=ks,this.material=e,this.center=new fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),Cf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Bs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Zo($o.set(-.5,-.5,0),Bs,o,Os,s,r),Zo(Or.set(.5,-.5,0),Bs,o,Os,s,r),Zo(Yo.set(.5,.5,0),Bs,o,Os,s,r),zd.set(0,0),hl.set(1,0),Vd.set(1,1);let c=e.ray.intersectTriangle($o,Or,Yo,!1,Fr);if(c===null&&(Zo(Or.set(-.5,.5,0),Bs,o,Os,s,r),hl.set(0,1),c=e.ray.intersectTriangle($o,Yo,Or,!1,Fr),c===null))return;let a=e.ray.origin.distanceTo(Fr);a<e.near||a>e.far||t.push({distance:a,point:Fr.clone(),uv:Bi.getInterpolation(Fr,$o,Or,Yo,zd,hl,Vd,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Zo(n,e,t,i,s,r){zs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(kr.x=r*zs.x-s*zs.y,kr.y=s*zs.x+r*zs.y):kr.copy(zs),n.copy(e),n.x+=kr.x,n.y+=kr.y,n.applyMatrix4(Cf)}var nr=class extends Tn{constructor(e=null,t=1,i=1,s,r,o,c,a,l=mn,h=mn,f,u){super(null,o,c,a,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sa=class extends Rt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vs=new at,Gd=new at,Ko=[],Wd=new tn,p_=new at,Br=new me,zr=new Mi,Xn=class extends me{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,p_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),Wd.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(Wd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),zr.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let c=0;c<i.length;c++)i[c]=s[o+c]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(i),e.ray.intersectsSphere(zr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vs),Gd.multiplyMatrices(i,Vs),Br.matrixWorld=Gd,Br.raycast(e,Ko);for(let o=0,c=Ko.length;o<c;o++){let a=Ko[o];a.instanceId=r,a.object=this,t.push(a)}Ko.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new nr(new Float32Array(s*this.count),s,this.count,or,ii));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let c=this.geometry.morphTargetsRelative?1:1-o,a=s*e;r[a]=c,r.set(i,a+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var to=class extends oi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wa=new A,Ta=new A,Xd=new at,Vr=new Qs,Jo=new Mi,ul=new A,qd=new A,vh=class extends nn{constructor(e=new mt,t=new to){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)wa.fromBufferAttribute(t,s-1),Ta.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=wa.distanceTo(Ta);e.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(s),Jo.radius+=r,e.ray.intersectsSphere(Jo)===!1)return;Xd.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(Xd);let c=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=c*c,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=l){let p=h.getX(x),M=h.getX(x+1),_=jo(this,e,Vr,a,p,M);_&&t.push(_)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(d),p=jo(this,e,Vr,a,x,g);p&&t.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=l){let p=jo(this,e,Vr,a,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=jo(this,e,Vr,a,m-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}};function jo(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(wa.fromBufferAttribute(o,s),Ta.fromBufferAttribute(o,r),t.distanceSqToSegment(wa,Ta,ul,qd)>i)return;ul.applyMatrix4(n.matrixWorld);let a=e.ray.origin.distanceTo(ul);if(!(a<e.near||a>e.far))return{distance:a,point:qd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var $d=new A,Yd=new A,Aa=class extends vh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)$d.fromBufferAttribute(t,s),Yd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+$d.distanceTo(Yd);e.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ps=class extends oi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zd=new at,_h=new Qs,Qo=new Mi,ea=new A,ir=class extends nn{constructor(e=new mt,t=new ps){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,e.ray.intersectsSphere(Qo)===!1)return;Zd.copy(s).invert(),_h.copy(e.ray).applyMatrix4(Zd);let c=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=c*c,l=i.index,f=i.attributes.position;if(l!==null){let u=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=u,x=d;m<x;m++){let g=l.getX(m);ea.fromBufferAttribute(f,g),Kd(ea,g,a,s,e,t,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=u,x=d;m<x;m++)ea.fromBufferAttribute(f,m),Kd(ea,m,a,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}};function Kd(n,e,t,i,s,r,o){let c=_h.distanceSqToPoint(n);if(c<t){let a=new A;_h.closestPointToPoint(n,a),a.applyMatrix4(i);let l=s.ray.origin.distanceTo(a);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(c),point:a,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var An=class extends Tn{constructor(e,t,i,s,r,o,c,a,l){super(e,t,i,s,r,o,c,a,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let c=0,a=r-1,l;for(;c<=a;)if(s=Math.floor(c+(a-c)/2),l=i[s]-o,l<0)c=s+1;else if(l>0)a=s-1;else{a=s;break}if(s=a,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),c=this.getPoint(r),a=t||(o.isVector2?new fe:new A);return a.copy(c).sub(o).normalize(),a}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new A,s=[],r=[],o=[],c=new A,a=new at;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),c.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],c),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),c.crossVectors(s[d-1],s[d]),c.length()>Number.EPSILON){c.normalize();let m=Math.acos(en(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(c,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(en(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(c.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(a.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},no=class extends Un{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,c=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=c,this.aRotation=a}getPoint(e,t=new fe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let c=this.aStartAngle+e*r,a=this.aX+this.xRadius*Math.cos(c),l=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=a-this.aX,d=l-this.aY;a=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return i.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Mh=class extends no{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Kh(){let n=0,e=0,t=0,i=0;function s(r,o,c,a){n=r,e=c,t=-3*r+3*o-2*c-a,i=2*r-2*o+c+a}return{initCatmullRom:function(r,o,c,a,l){s(o,c,l*(c-r),l*(a-o))},initNonuniformCatmullRom:function(r,o,c,a,l,h,f){let u=(o-r)/l-(c-r)/(l+h)+(c-o)/h,d=(c-o)/h-(a-o)/(h+f)+(a-c)/f;u*=h,d*=h,s(o,c,u,d)},calc:function(r){let o=r*r,c=o*r;return n+e*r+t*o+i*c}}}var ta=new A,dl=new Kh,fl=new Kh,pl=new Kh,io=class extends Un{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new A){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,c=Math.floor(o),a=o-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/r)+1)*r:a===0&&c===r-1&&(c=r-2,a=1);let l,h;this.closed||c>0?l=s[(c-1)%r]:(ta.subVectors(s[0],s[1]).add(s[0]),l=ta);let f=s[c%r],u=s[(c+1)%r];if(this.closed||c+2<r?h=s[(c+2)%r]:(ta.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ta),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),dl.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,m,x,g),fl.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,m,x,g),pl.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(dl.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),fl.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),pl.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return i.set(dl.calc(a),fl.calc(a),pl.calc(a)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Jd(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,c=n*n,a=n*c;return(2*t-2*i+r+o)*a+(-3*t+3*i-2*r-o)*c+r*n+t}function m_(n,e){let t=1-n;return t*t*e}function g_(n,e){return 2*(1-n)*n*e}function x_(n,e){return n*n*e}function Yr(n,e,t,i){return m_(n,e)+g_(n,t)+x_(n,i)}function y_(n,e){let t=1-n;return t*t*t*e}function v_(n,e){let t=1-n;return 3*t*t*n*e}function __(n,e){return 3*(1-n)*n*n*e}function M_(n,e){return n*n*n*e}function Zr(n,e,t,i,s){return y_(n,e)+v_(n,t)+__(n,i)+M_(n,s)}var Ra=class extends Un{constructor(e=new fe,t=new fe,i=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,o=this.v2,c=this.v3;return i.set(Zr(e,s.x,r.x,o.x,c.x),Zr(e,s.y,r.y,o.y,c.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Eh=class extends Un{constructor(e=new A,t=new A,i=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new A){let i=t,s=this.v0,r=this.v1,o=this.v2,c=this.v3;return i.set(Zr(e,s.x,r.x,o.x,c.x),Zr(e,s.y,r.y,o.y,c.y),Zr(e,s.z,r.z,o.z,c.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ca=class extends Un{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bh=class extends Un{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends Un{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Yr(e,s.x,r.x,o.x),Yr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sh=class extends Un{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Yr(e,s.x,r.x,o.x),Yr(e,s.y,r.y,o.y),Yr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),c=r-o,a=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Jd(c,a.x,l.x,h.x,f.x),Jd(c,a.y,l.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},wh=Object.freeze({__proto__:null,ArcCurve:Mh,CatmullRomCurve3:io,CubicBezierCurve:Ra,CubicBezierCurve3:Eh,EllipseCurve:no,LineCurve:Ca,LineCurve3:bh,QuadraticBezierCurve:Pa,QuadraticBezierCurve3:Sh,SplineCurve:Ia}),Th=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,c=this.curves[r],a=c.getLength(),l=a===0?0:1-o/a;return c.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],c=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,a=o.getPoints(c);for(let l=0;l<a.length;l++){let h=a[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new wh[s.type]().fromJSON(s))}return this}},ms=class extends Th{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ca(this.currentPoint.clone(),new fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Pa(this.currentPoint.clone(),new fe(e,t),new fe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let c=new Ra(this.currentPoint.clone(),new fe(e,t),new fe(i,s),new fe(r,o));return this.curves.push(c),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ia(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let c=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+c,t+a,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,c,a){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,c,a),this}absellipse(e,t,i,s,r,o,c,a){let l=new no(e,t,i,s,r,o,c,a);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qi=class n extends mt{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=en(s,0,Math.PI*2);let r=[],o=[],c=[],a=[],l=[],h=1/t,f=new A,u=new fe,d=new A,m=new A,x=new A,g=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),a.push(d.x,d.y,d.z);break;case e.length-1:a.push(x.x,x.y,x.z);break;default:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),a.push(d.x,d.y,d.z),x.copy(m)}for(let M=0;M<=t;M++){let _=i+M*h*s,y=Math.sin(_),S=Math.cos(_);for(let v=0;v<=e.length-1;v++){f.x=e[v].x*y,f.y=e[v].y,f.z=e[v].x*S,o.push(f.x,f.y,f.z),u.x=M/t,u.y=v/(e.length-1),c.push(u.x,u.y);let T=a[3*v+0]*y,P=a[3*v+1],b=a[3*v+0]*S;l.push(T,P,b)}}for(let M=0;M<t;M++)for(let _=0;_<e.length-1;_++){let y=_+M*e.length,S=y,v=y+e.length,T=y+e.length+1,P=y+1;r.push(S,v,P),r.push(T,P,v)}this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("uv",new Ke(c,2)),this.setAttribute("normal",new Ke(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},bi=class n extends qi{constructor(e=1,t=1,i=4,s=8){let r=new ms;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},qn=class n extends mt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],c=[],a=[],l=new A,h=new fe;o.push(0,0,0),c.push(0,0,1),a.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=i+f/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),c.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,a.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ze=class n extends mt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,c=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:c,thetaLength:a};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,x=[],g=i/2,p=0;M(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ke(f,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(d,2));function M(){let y=new A,S=new A,v=0,T=(t-e)/i;for(let P=0;P<=r;P++){let b=[],E=P/r,N=E*(t-e)+e;for(let F=0;F<=s;F++){let C=F/s,H=C*a+c,V=Math.sin(H),D=Math.cos(H);S.x=N*V,S.y=-E*i+g,S.z=N*D,f.push(S.x,S.y,S.z),y.set(V,T,D).normalize(),u.push(y.x,y.y,y.z),d.push(C,1-E),b.push(m++)}x.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){let E=x[b][P],N=x[b+1][P],F=x[b+1][P+1],C=x[b][P+1];(e>0||b!==0)&&(h.push(E,N,C),v+=3),(t>0||b!==r-1)&&(h.push(N,F,C),v+=3)}l.addGroup(p,v,0),p+=v}function _(y){let S=m,v=new fe,T=new A,P=0,b=y===!0?e:t,E=y===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,g*E,0),u.push(0,E,0),d.push(.5,.5),m++;let N=m;for(let F=0;F<=s;F++){let H=F/s*a+c,V=Math.cos(H),D=Math.sin(H);T.x=b*D,T.y=g*E,T.z=b*V,f.push(T.x,T.y,T.z),u.push(0,E,0),v.x=V*.5+.5,v.y=D*.5*E+.5,d.push(v.x,v.y),m++}for(let F=0;F<s;F++){let C=S+F,H=N+F;y===!0?h.push(H,H+1,C):h.push(H+1,H,C),P+=3}l.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Lt=class n extends ze{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,c=Math.PI*2){super(0,e,t,i,s,r,o,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:c}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},La=class n extends mt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];c(s),l(i),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function c(M){let _=new A,y=new A,S=new A;for(let v=0;v<t.length;v+=3)d(t[v+0],_),d(t[v+1],y),d(t[v+2],S),a(_,y,S,M)}function a(M,_,y,S){let v=S+1,T=[];for(let P=0;P<=v;P++){T[P]=[];let b=M.clone().lerp(y,P/v),E=_.clone().lerp(y,P/v),N=v-P;for(let F=0;F<=N;F++)F===0&&P===v?T[P][F]=b:T[P][F]=b.clone().lerp(E,F/N)}for(let P=0;P<v;P++)for(let b=0;b<2*(v-P)-1;b++){let E=Math.floor(b/2);b%2===0?(u(T[P][E+1]),u(T[P+1][E]),u(T[P][E])):(u(T[P][E+1]),u(T[P+1][E+1]),u(T[P+1][E]))}}function l(M){let _=new A;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(M),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let M=new A;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let y=g(M)/2/Math.PI+.5,S=p(M)/Math.PI+.5;o.push(y,1-S)}m(),f()}function f(){for(let M=0;M<o.length;M+=6){let _=o[M+0],y=o[M+2],S=o[M+4],v=Math.max(_,y,S),T=Math.min(_,y,S);v>.9&&T<.1&&(_<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,_){let y=M*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function m(){let M=new A,_=new A,y=new A,S=new A,v=new fe,T=new fe,P=new fe;for(let b=0,E=0;b<r.length;b+=9,E+=6){M.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),v.set(o[E+0],o[E+1]),T.set(o[E+2],o[E+3]),P.set(o[E+4],o[E+5]),S.copy(M).add(_).add(y).divideScalar(3);let N=g(S);x(v,E+0,M,N),x(T,E+2,_,N),x(P,E+4,y,N)}}function x(M,_,y,S){S<0&&M.x===1&&(o[_]=M.x-1),y.x===0&&y.z===0&&(o[_]=S/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var ai=class extends ms{constructor(e){super(e),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new ms().fromJSON(s))}return this}},E_={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Pf(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let c,a,l,h,f,u,d;if(i&&(r=A_(n,e,r,t)),n.length>80*t){c=l=n[0],a=h=n[1];for(let m=t;m<s;m+=t)f=n[m],u=n[m+1],f<c&&(c=f),u<a&&(a=u),f>l&&(l=f),u>h&&(h=u);d=Math.max(l-c,h-a),d=d!==0?32767/d:0}return so(r,o,t,c,a,d,0),o}};function Pf(n,e,t,i,s){let r,o;if(s===k_(n,e,t,i)>0)for(r=e;r<t;r+=i)o=jd(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=jd(r,n[r],n[r+1],o);return o&&Va(o,o.next)&&(oo(o),o=o.next),o}function gs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Va(t,t.next)||Ht(t.prev,t,t.next)===0)){if(oo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function so(n,e,t,i,s,r,o){if(!n)return;!o&&r&&L_(n,i,s,r);let c=n,a,l;for(;n.prev!==n.next;){if(a=n.prev,l=n.next,r?S_(n,i,s,r):b_(n)){e.push(a.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),oo(n),n=l.next,c=l.next;continue}if(n=l,n===c){o?o===1?(n=w_(gs(n),e,t),so(n,e,t,i,s,r,2)):o===2&&T_(n,e,t,i,s,r):so(gs(n),e,t,i,s,r,1);break}}}function b_(n){let e=n.prev,t=n,i=n.next;if(Ht(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,c=e.y,a=t.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,f=c<a?c<l?c:l:a<l?a:l,u=s>r?s>o?s:o:r>o?r:o,d=c>a?c>l?c:l:a>l?a:l,m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Ws(s,c,r,a,o,l,m.x,m.y)&&Ht(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function S_(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Ht(s,r,o)>=0)return!1;let c=s.x,a=r.x,l=o.x,h=s.y,f=r.y,u=o.y,d=c<a?c<l?c:l:a<l?a:l,m=h<f?h<u?h:u:f<u?f:u,x=c>a?c>l?c:l:a>l?a:l,g=h>f?h>u?h:u:f>u?f:u,p=Ah(d,m,e,t,i),M=Ah(x,g,e,t,i),_=n.prevZ,y=n.nextZ;for(;_&&_.z>=p&&y&&y.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Ws(c,h,a,f,l,u,_.x,_.y)&&Ht(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Ws(c,h,a,f,l,u,y.x,y.y)&&Ht(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Ws(c,h,a,f,l,u,_.x,_.y)&&Ht(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Ws(c,h,a,f,l,u,y.x,y.y)&&Ht(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function w_(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!Va(s,r)&&If(s,i,i.next,r)&&ro(s,r)&&ro(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),oo(i),oo(i.next),i=n=r),i=i.next}while(i!==n);return gs(i)}function T_(n,e,t,i,s,r){let o=n;do{let c=o.next.next;for(;c!==o.prev;){if(o.i!==c.i&&N_(o,c)){let a=Lf(o,c);o=gs(o,o.next),a=gs(a,a.next),so(o,e,t,i,s,r,0),so(a,e,t,i,s,r,0);return}c=c.next}o=o.next}while(o!==n)}function A_(n,e,t,i){let s=[],r,o,c,a,l;for(r=0,o=e.length;r<o;r++)c=e[r]*i,a=r<o-1?e[r+1]*i:n.length,l=Pf(n,c,a,i,!1),l===l.next&&(l.steiner=!0),s.push(U_(l));for(s.sort(R_),r=0;r<s.length;r++)t=C_(s[r],t);return t}function R_(n,e){return n.x-e.x}function C_(n,e){let t=P_(n,e);if(!t)return e;let i=Lf(t,n);return gs(i,i.next),gs(t,t.next)}function P_(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>i&&(i=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let c=s,a=s.x,l=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=a&&r!==t.x&&Ws(o<l?r:i,o,a,l,o<l?i:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),ro(t,n)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&I_(s,t)))&&(s=t,h=f)),t=t.next;while(t!==c);return s}function I_(n,e){return Ht(n.prev,n,e.prev)<0&&Ht(e.next,n,n.next)<0}function L_(n,e,t,i){let s=n;do s.z===0&&(s.z=Ah(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,D_(s)}function D_(n){let e,t,i,s,r,o,c,a,l=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,c=0,e=0;e<l&&(c++,i=i.nextZ,!!i);e++);for(a=l;c>0||a>0&&i;)c!==0&&(a===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,c--):(s=i,i=i.nextZ,a--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,l*=2}while(o>1);return n}function Ah(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function U_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ws(n,e,t,i,s,r,o,c){return(s-o)*(e-c)>=(n-o)*(r-c)&&(n-o)*(i-c)>=(t-o)*(e-c)&&(t-o)*(r-c)>=(s-o)*(i-c)}function N_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!H_(n,e)&&(ro(n,e)&&ro(e,n)&&F_(n,e)&&(Ht(n.prev,n,e.prev)||Ht(n,e.prev,e))||Va(n,e)&&Ht(n.prev,n,n.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Va(n,e){return n.x===e.x&&n.y===e.y}function If(n,e,t,i){let s=ia(Ht(n,e,t)),r=ia(Ht(n,e,i)),o=ia(Ht(t,i,n)),c=ia(Ht(t,i,e));return!!(s!==r&&o!==c||s===0&&na(n,t,e)||r===0&&na(n,i,e)||o===0&&na(t,n,i)||c===0&&na(t,e,i))}function na(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ia(n){return n>0?1:n<0?-1:0}function H_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&If(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ro(n,e){return Ht(n.prev,n,n.next)<0?Ht(n,e,n.next)>=0&&Ht(n,n.prev,e)>=0:Ht(n,e,n.prev)<0||Ht(n,n.next,e)<0}function F_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Lf(n,e){let t=new Rh(n.i,n.x,n.y),i=new Rh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function jd(n,e,t,i){let s=new Rh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function oo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Rh(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function k_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Wi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Qd(e),ef(i,e);let o=e.length;t.forEach(Qd);for(let a=0;a<t.length;a++)s.push(o),o+=t[a].length,ef(i,t[a]);let c=E_.triangulate(i,s);for(let a=0;a<c.length;a+=3)r.push(c.slice(a,a+3));return r}};function Qd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ef(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var sr=class n extends mt{constructor(e=new ai([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let c=0,a=e.length;c<a;c++){let l=e[c];o(l)}this.setAttribute("position",new Ke(s,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function o(c){let a=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:O_,_,y=!1,S,v,T,P;p&&(_=p.getSpacedPoints(h),y=!0,u=!1,S=p.computeFrenetFrames(h,!1),v=new A,T=new A,P=new A),u||(g=0,d=0,m=0,x=0);let b=c.extractPoints(l),E=b.shape,N=b.holes;if(!Wi.isClockWise(E)){E=E.reverse();for(let j=0,ce=N.length;j<ce;j++){let k=N[j];Wi.isClockWise(k)&&(N[j]=k.reverse())}}let C=Wi.triangulateShape(E,N),H=E;for(let j=0,ce=N.length;j<ce;j++){let k=N[j];E=E.concat(k)}function V(j,ce,k){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(ce,k)}let D=E.length,U=C.length;function R(j,ce,k){let xe,se,Z,ie=j.x-ce.x,De=j.y-ce.y,be=k.x-j.x,L=k.y-j.y,w=ie*ie+De*De,z=ie*L-De*be;if(Math.abs(z)>Number.EPSILON){let te=Math.sqrt(w),ue=Math.sqrt(be*be+L*L),oe=ce.x-De/te,Fe=ce.y+ie/te,we=k.x-L/ue,Le=k.y+be/ue,ct=((we-oe)*L-(Le-Fe)*be)/(ie*L-De*be);xe=oe+ie*ct-j.x,se=Fe+De*ct-j.y;let pe=xe*xe+se*se;if(pe<=2)return new fe(xe,se);Z=Math.sqrt(pe/2)}else{let te=!1;ie>Number.EPSILON?be>Number.EPSILON&&(te=!0):ie<-Number.EPSILON?be<-Number.EPSILON&&(te=!0):Math.sign(De)===Math.sign(L)&&(te=!0),te?(xe=-De,se=ie,Z=Math.sqrt(w)):(xe=ie,se=De,Z=Math.sqrt(w/2))}return new fe(xe/Z,se/Z)}let Y=[];for(let j=0,ce=H.length,k=ce-1,xe=j+1;j<ce;j++,k++,xe++)k===ce&&(k=0),xe===ce&&(xe=0),Y[j]=R(H[j],H[k],H[xe]);let ne=[],de,Me=Y.concat();for(let j=0,ce=N.length;j<ce;j++){let k=N[j];de=[];for(let xe=0,se=k.length,Z=se-1,ie=xe+1;xe<se;xe++,Z++,ie++)Z===se&&(Z=0),ie===se&&(ie=0),de[xe]=R(k[xe],k[Z],k[ie]);ne.push(de),Me=Me.concat(de)}for(let j=0;j<g;j++){let ce=j/g,k=d*Math.cos(ce*Math.PI/2),xe=m*Math.sin(ce*Math.PI/2)+x;for(let se=0,Z=H.length;se<Z;se++){let ie=V(H[se],Y[se],xe);O(ie.x,ie.y,-k)}for(let se=0,Z=N.length;se<Z;se++){let ie=N[se];de=ne[se];for(let De=0,be=ie.length;De<be;De++){let L=V(ie[De],de[De],xe);O(L.x,L.y,-k)}}}let ve=m+x;for(let j=0;j<D;j++){let ce=u?V(E[j],Me[j],ve):E[j];y?(T.copy(S.normals[0]).multiplyScalar(ce.x),v.copy(S.binormals[0]).multiplyScalar(ce.y),P.copy(_[0]).add(T).add(v),O(P.x,P.y,P.z)):O(ce.x,ce.y,0)}for(let j=1;j<=h;j++)for(let ce=0;ce<D;ce++){let k=u?V(E[ce],Me[ce],ve):E[ce];y?(T.copy(S.normals[j]).multiplyScalar(k.x),v.copy(S.binormals[j]).multiplyScalar(k.y),P.copy(_[j]).add(T).add(v),O(P.x,P.y,P.z)):O(k.x,k.y,f/h*j)}for(let j=g-1;j>=0;j--){let ce=j/g,k=d*Math.cos(ce*Math.PI/2),xe=m*Math.sin(ce*Math.PI/2)+x;for(let se=0,Z=H.length;se<Z;se++){let ie=V(H[se],Y[se],xe);O(ie.x,ie.y,f+k)}for(let se=0,Z=N.length;se<Z;se++){let ie=N[se];de=ne[se];for(let De=0,be=ie.length;De<be;De++){let L=V(ie[De],de[De],xe);y?O(L.x,L.y+_[h-1].y,_[h-1].x+k):O(L.x,L.y,f+k)}}}q(),ee();function q(){let j=s.length/3;if(u){let ce=0,k=D*ce;for(let xe=0;xe<U;xe++){let se=C[xe];$(se[2]+k,se[1]+k,se[0]+k)}ce=h+g*2,k=D*ce;for(let xe=0;xe<U;xe++){let se=C[xe];$(se[0]+k,se[1]+k,se[2]+k)}}else{for(let ce=0;ce<U;ce++){let k=C[ce];$(k[2],k[1],k[0])}for(let ce=0;ce<U;ce++){let k=C[ce];$(k[0]+D*h,k[1]+D*h,k[2]+D*h)}}i.addGroup(j,s.length/3-j,0)}function ee(){let j=s.length/3,ce=0;ge(H,ce),ce+=H.length;for(let k=0,xe=N.length;k<xe;k++){let se=N[k];ge(se,ce),ce+=se.length}i.addGroup(j,s.length/3-j,1)}function ge(j,ce){let k=j.length;for(;--k>=0;){let xe=k,se=k-1;se<0&&(se=j.length-1);for(let Z=0,ie=h+g*2;Z<ie;Z++){let De=D*Z,be=D*(Z+1),L=ce+xe+De,w=ce+se+De,z=ce+se+be,te=ce+xe+be;Q(L,w,z,te)}}}function O(j,ce,k){a.push(j),a.push(ce),a.push(k)}function $(j,ce,k){le(j),le(ce),le(k);let xe=s.length/3,se=M.generateTopUV(i,s,xe-3,xe-2,xe-1);Ee(se[0]),Ee(se[1]),Ee(se[2])}function Q(j,ce,k,xe){le(j),le(ce),le(xe),le(ce),le(k),le(xe);let se=s.length/3,Z=M.generateSideWallUV(i,s,se-6,se-3,se-2,se-1);Ee(Z[0]),Ee(Z[1]),Ee(Z[3]),Ee(Z[1]),Ee(Z[2]),Ee(Z[3])}function le(j){s.push(a[j*3+0]),s.push(a[j*3+1]),s.push(a[j*3+2])}function Ee(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return B_(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let c=t[e.shapes[r]];i.push(c)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new wh[s.type]().fromJSON(s)),new n(i,e.options)}},O_={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],c=e[i*3],a=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new fe(r,o),new fe(c,a),new fe(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],c=e[t*3+1],a=e[t*3+2],l=e[i*3],h=e[i*3+1],f=e[i*3+2],u=e[s*3],d=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(c-h)<Math.abs(o-l)?[new fe(o,1-a),new fe(l,1-f),new fe(u,1-m),new fe(x,1-p)]:[new fe(c,1-a),new fe(h,1-f),new fe(d,1-m),new fe(g,1-p)]}};function B_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var $i=class n extends La{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Da=class n extends La{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},$n=class n extends mt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let c=[],a=[],l=[],h=[],f=e,u=(t-e)/s,d=new A,m=new fe;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let p=r+g/i*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),a.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}f+=u}for(let x=0;x<s;x++){let g=x*(i+1);for(let p=0;p<i;p++){let M=p+g,_=M,y=M+i+1,S=M+i+2,v=M+1;c.push(_,y,v),c.push(y,S,v)}}this.setIndex(c),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ua=class n extends mt{constructor(e=new ai([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],c=0,a=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(c,a,h),c+=a,a=0;this.setIndex(i),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(r,3)),this.setAttribute("uv",new Ke(o,2));function l(h){let f=s.length/3,u=h.extractPoints(t),d=u.shape,m=u.holes;Wi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){let M=m[g];Wi.isClockWise(M)===!0&&(m[g]=M.reverse())}let x=Wi.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){let M=m[g];d=d.concat(M)}for(let g=0,p=d.length;g<p;g++){let M=d[g];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,p=x.length;g<p;g++){let M=x[g],_=M[0]+f,y=M[1]+f,S=M[2]+f;i.push(_,y,S),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return z_(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function z_(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Ge=class n extends mt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let a=Math.min(o+c,Math.PI),l=0,h=[],f=new A,u=new A,d=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let M=[],_=p/i,y=0;p===0&&o===0?y=.5/t:p===i&&a===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){let v=S/t;f.x=-e*Math.cos(s+v*r)*Math.sin(o+_*c),f.y=e*Math.cos(o+_*c),f.z=e*Math.sin(s+v*r)*Math.sin(o+_*c),m.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),g.push(v+y,1-_),M.push(l++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let _=h[p][M+1],y=h[p][M],S=h[p+1][M],v=h[p+1][M+1];(p!==0||o>0)&&d.push(_,y,v),(p!==i-1||a<Math.PI)&&d.push(y,S,v)}this.setIndex(d),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var st=class n extends mt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],c=[],a=[],l=[],h=new A,f=new A,u=new A;for(let d=0;d<=i;d++)for(let m=0;m<=s;m++){let x=m/s*r,g=d/i*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(x),f.y=(e+t*Math.cos(g))*Math.sin(x),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(f,h).normalize(),a.push(u.x,u.y,u.z),l.push(m/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=s;m++){let x=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,M=(s+1)*d+m;o.push(x,g,M),o.push(g,p,M)}this.setIndex(o),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Yi=class extends oi{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Ie(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vf,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function sa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function V_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var rr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let c=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let c=t[1];e<c&&(i=2,r=c);for(let a=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let c=i+o>>>1;e<t[c]?o=c:i=c+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ch=class extends rr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xu,endingEnd:Xu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,c=s[r],a=s[o];if(c===void 0)switch(this.getSettings_().endingStart){case qu:r=e,c=2*t-i;break;case $u:r=s.length-2,c=t+s[r]-s[r+1];break;default:r=e,c=i}if(a===void 0)switch(this.getSettings_().endingEnd){case qu:o=e,a=2*i-t;break;case $u:o=1,a=i+s[1]-s[0];break;default:o=e-1,a=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-c),this._weightNext=l/(a-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,a=e*c,l=a-c,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-t)/(s-t),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,M=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,_=(-1-d)*g+(1.5+d)*x+.5*m,y=d*g-d*x;for(let S=0;S!==c;++S)r[S]=p*o[h+S]+M*o[l+S]+_*o[a+S]+y*o[f+S];return r}},Ph=class extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,a=e*c,l=a-c,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==c;++u)r[u]=o[l+u]*f+o[a+u]*h;return r}},Ih=class extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Yn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sa(t,this.TimeBufferType),this.values=sa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:sa(e.times,Array),values:sa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ih(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ch(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ha:t=this.InterpolantFactoryMethodDiscrete;break;case eh:t=this.InterpolantFactoryMethodLinear;break;case Fc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ha;case this.InterpolantFactoryMethodLinear:return eh;case this.InterpolantFactoryMethodSmooth:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let c=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*c,o*c)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let c=0;c!==r;c++){let a=i[c];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,a),e=!1;break}if(o!==null&&o>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,a,o),e=!1;break}o=a}if(s!==void 0&&V_(s))for(let c=0,a=s.length;c!==a;++c){let l=s[c];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Fc,r=e.length-1,o=1;for(let c=1;c<r;++c){let a=!1,l=e[c],h=e[c+1];if(l!==h&&(c!==1||l!==e[0]))if(s)a=!0;else{let f=c*i,u=f-i,d=f+i;for(let m=0;m!==i;++m){let x=t[f+m];if(x!==t[u+m]||x!==t[d+m]){a=!0;break}}}if(a){if(c!==o){e[o]=e[c];let f=c*i,u=o*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let c=r*i,a=o*i,l=0;l!==i;++l)t[a+l]=t[c+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=eh;var xs=class extends Yn{constructor(e,t,i){super(e,t,i)}};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=ha;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Lh=class extends Yn{};Lh.prototype.ValueTypeName="color";var Dh=class extends Yn{};Dh.prototype.ValueTypeName="number";var Uh=class extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,a=(i-t)/(s-t),l=e*c;for(let h=l+c;l!==h;l+=4)zt.slerpFlat(r,0,o,l-c,o,l,a);return r}},Na=class extends Yn{InterpolantFactoryMethodLinear(e){return new Uh(this.times,this.values,this.getValueSize(),e)}};Na.prototype.ValueTypeName="quaternion";Na.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends Yn{constructor(e,t,i){super(e,t,i)}};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=ha;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Nh=class extends Yn{};Nh.prototype.ValueTypeName="vector";var Hh=class{constructor(e,t,i){let s=this,r=!1,o=0,c=0,a,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){c++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,c),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,c),o===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},G_=new Hh,Fh=class{constructor(e){this.manager=e!==void 0?e:G_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Fh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ha=class extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Si=class extends Ha{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ml=new at,tf=new A,nf=new A,kh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eo,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;tf.setFromMatrixPosition(e.matrixWorld),t.position.copy(tf),nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nf),t.updateMatrixWorld(),ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Oh=class extends kh{constructor(){super(new va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wi=class extends Ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new Oh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Fa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=sf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function sf(){return performance.now()}var Jh="\\[\\]\\.:\\/",W_=new RegExp("["+Jh+"]","g"),jh="[^"+Jh+"]",X_="[^"+Jh.replace("\\.","")+"]",q_=/((?:WC+[\/:])*)/.source.replace("WC",jh),$_=/(WCOD+)?/.source.replace("WCOD",X_),Y_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jh),Z_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jh),K_=new RegExp("^"+q_+$_+Y_+Z_+"$"),J_=["material","materials","bones","map"],Bh=class{constructor(e,t,i){let s=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(W_,"")}static parseTrackName(e){let t=K_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);J_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let c=r[o];if(c.name===t||c.uuid===t)return c;let a=i(c.children);if(a)return a}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}a=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(a=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Bh;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pM=new Float32Array(1);var rf=new at,ka=class{constructor(e,t,i=0,s=1/0){this.ray=new Qs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rf),this}intersectObject(e,t=!0,i=[]){return zh(e,this,i,t),i.sort(of),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)zh(e[s],this,i,t);return i.sort(of),i}};function of(n,e){return n.distance-e.distance}function zh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,c=r.length;o<c;o++)zh(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var j_=(()=>{let n=new nr(new Uint8Array([150,215,255]),3,1,or);return n.minFilter=n.magFilter=mn,n.needsUpdate=!0,n})(),co={uTime:{value:0}},Q_=(()=>{let n=new nr(new Uint8Array([214,238,255]),3,1,or);return n.minFilter=n.magFilter=mn,n.needsUpdate=!0,n})(),e1=new Set([16641766,16047314]),Qh=new Map;function wt(n,e={}){let t=`${n}|${JSON.stringify(e)}`;if(!e.unique&&Qh.has(t))return Qh.get(t);let i=new Yi({color:n,gradientMap:e1.has(n)?Q_:j_,...t1(e)});return e.unique||Qh.set(t,i),i}function t1(n){let{unique:e,...t}=n;return t}function Df(n,e={}){return new We({color:n,...e})}function n1(n){let e=new Ie(n),t={};return e.getHSL(t),new Ie().setHSL(t.h,t.s*.55,Math.max(.18,t.l*.52))}var Uf=`
uniform vec3 uWind;
uniform float uWindStart;
uniform float uTime;
vec3 windDeform(vec3 p){
  float d = max(0.0, uWindStart - p.y);
  float k = d * d;
  p += uWind * k;
  p.x += sin(uTime * 4.0 + p.y * 9.0) * 0.06 * k * length(uWind);
  return p;
}`,eu=new Map;function lo(n,e,t){let i=`${new Ie(n).getHex()}|${e}`;if(!t&&eu.has(i))return eu.get(i);let s=cr.merge([Se.fog,{uColor:{value:new Ie(n)},uThick:{value:e}}]);t&&Object.assign(s,t);let r=new Vt({uniforms:s,defines:t?{USE_WIND:""}:{},fog:!0,side:Bt,vertexShader:`
      uniform float uThick;
      #ifdef USE_WIND
      ${Uf}
      #endif
      #include <fog_pars_vertex>
      void main(){
        vec3 p = position;
        vec3 n = normal;
        #ifdef USE_WIND
        p = windDeform(p);
        #endif
        vec4 wp = vec4(p, 1.0);
        vec3 wn = n;
        #ifdef USE_INSTANCING
        wp = instanceMatrix * wp;
        wn = mat3(instanceMatrix) * wn;
        #endif
        vec4 mvPosition = modelViewMatrix * wp;
        vec3 vn = normalize(normalMatrix * wn);
        mvPosition.xyz += vn * uThick;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform vec3 uColor;
      #include <fog_pars_fragment>
      void main(){
        gl_FragColor = vec4(uColor, 1.0);
        #include <fog_fragment>
      }`});return t||eu.set(i,r),r}function i1(n,e){return n.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
${Uf}`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = windDeform(transformed);`)},n.customProgramCacheKey=()=>"wind"+n.uuid,n}function Nf(n){return{uWind:{value:new A},uWindStart:{value:n},uTime:co.uTime}}function B(n,e,t={}){let{outline:i=!0,thick:s=.008,line:r,mat:o,windU:c,castShadow:a=!1}=t,l=o;l||(l=c?i1(wt(e,{unique:!0,side:t.side??ri}),c):wt(e,t.side?{side:t.side}:{}));let h=new me(n,l);if(h.castShadow=a,i){let f=new me(n,lo(r??n1(e),s,c));f.userData.isOutline=!0,h.add(f)}return h}function Ct(n,e=1){return new We({color:new Ie(n).multiplyScalar(e),toneMapped:!1})}var tu;function sn(n,e){if(!tu){let i=document.createElement("canvas");i.width=i.height=128;let s=i.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,0.9)"),r.addColorStop(.35,"rgba(255,255,255,0.35)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128),tu=new An(i)}let t=new tr(new fs({map:tu,color:n,transparent:!0,depthWrite:!1,blending:yn}));return t.scale.setScalar(e),t}function Je(n,e,t,i=.02,s=3){i=Math.min(i,n/2-1e-4,e/2-1e-4);let r=new ai,o=-n/2+i,c=-e/2+i,a=n-2*i,l=e-2*i;r.moveTo(o,c-i),r.lineTo(o+a,c-i),r.absarc(o+a,c,i,-Math.PI/2,0),r.lineTo(o+a+i,c+l),r.absarc(o+a,c+l,i,0,Math.PI/2),r.lineTo(o,c+l+i),r.absarc(o,c+l,i,Math.PI/2,Math.PI),r.lineTo(o-i,c),r.absarc(o,c,i,Math.PI,Math.PI*1.5);let h=Math.min(i,t/2-1e-4),f=new sr(r,{depth:Math.max(1e-4,t-2*h),bevelEnabled:!0,bevelThickness:h,bevelSize:0,bevelSegments:s,curveSegments:s*2});return f.translate(0,0,-(t-2*h)/2),f.computeVertexNormals(),f}function s1(n,e){e=Math.abs(e);for(let t=0;t<n.length-1;t++){let[i,s]=n[t],[r,o]=n[t+1];if(e>=i&&e<=r){let c=(e-i)/(r-i),a=c*c*(3-2*c);return s+(o-s)*a}}return n[n.length-1][1]}function Hf({r:n,lengthKeys:e,spikes:t=14,spikeDepth:i=.35,flare:s=.08,back:r=0,cols:o=120,rows:c=44}){let a=n*Math.PI/2,l=[],h=[],f=[],u=[],d=0;for(let g=0;g<=o;g++){let p=g/o*Math.PI*2-Math.PI,M=s1(e,p)*n,_=Math.abs(p)/Math.PI,y=Math.pow(Math.abs(Math.sin(p*t*.5+.3)),.7),S=.65+.35*Math.sin(p*7.3+1.1)*Math.sin(p*3.1),v=M-(1-y)*i*n*S*(.6+_*.6);u.push(v),d=Math.max(d,v)}for(let g=0;g<=o;g++){let p=g/o*Math.PI*2-Math.PI,M=u[g];for(let _=0;_<=c;_++){let y=_/c*M,S,v;if(y<=a){let P=y/n;S=n*Math.sin(P),v=n*Math.cos(P)}else{let P=y-a;S=n+s*Math.pow(P,1.15),v=-P}let T=r*Math.max(0,-Math.cos(p))*Math.max(0,-v);l.push(S*Math.sin(p),v,S*Math.cos(p)-T),h.push(g/o,1-y/d)}}let m=c+1;for(let g=0;g<o;g++)for(let p=0;p<c;p++){let M=g*m+p,_=(g+1)*m+p;f.push(M,M+1,_,_,M+1,_+1)}let x=new mt;return x.setAttribute("position",new Ke(l,3)),x.setAttribute("uv",new Ke(h,2)),x.setIndex(f),x.computeVertexNormals(),x}function Ff(n,e,t){let i=document.createElement("canvas");i.width=512,i.height=256;let s=i.getContext("2d");if(s.fillStyle=n,s.fillRect(0,0,512,256),t){let a=s.createLinearGradient(0,0,0,256);a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(.55,"rgba(0,0,0,0)"),a.addColorStop(1,t),s.fillStyle=a,s.fillRect(0,0,512,256)}let r=7,o=()=>(r=r*16807%2147483647)/2147483647;s.fillStyle=e;for(let a=0;a<70;a++){let l=o()*512,h=2+o()*7,f=20+o()*120,u=30+o()*140;s.globalAlpha=.25+o()*.4,s.beginPath(),s.moveTo(l,f),s.quadraticCurveTo(l+h,f+u*.5,l+h*.3,f+u),s.quadraticCurveTo(l-h*.3,f+u*.5,l,f),s.fill()}s.globalAlpha=1;let c=new An(i);return c.colorSpace=qt,c.wrapS=Kr,c}function Ga(n,e,{bendX:t=0,bendZ:i=0,flat:s=1,seg:r=8,hseg:o=8}={}){let c=new Lt(n,e,r,o);c.rotateX(Math.PI),c.translate(0,-e/2,0);let a=c.attributes.position;for(let l=0;l<a.count;l++){let h=-a.getY(l)/e;a.setX(l,a.getX(l)+t*h*h),a.setZ(l,a.getZ(l)*s+i*h*h)}return c.computeVertexNormals(),c}function nu(n,e,t,i=18,s=.012,r=0){let o=new ze(n,e,t,i*4,6,!0),c=o.attributes.position;for(let a=0;a<c.count;a++){let l=c.getX(a),h=c.getZ(a),f=c.getY(a),u=Math.atan2(l,h),d=(t/2-f)/t,m=1+(Math.abs(Math.sin(u*i/2))-.5)*s*d/Math.max(.05,n+(e-n)*d)*4,x=r*Math.max(0,Math.cos(u))*d;c.setX(a,l*m),c.setZ(a,h*m),c.setY(a,f+x)}return o.computeVertexNormals(),o}function Pt(n,e=24){return new qi(n.map(([t,i])=>new fe(t,i)),e)}function kf(n,e,t){let i=[];for(let c=16;c>=0;c--){let a=c/16,l=e*Math.pow(Math.sin(Math.PI*Math.pow(a,.75)),.9)*(1-.15*a)+.002;i.push([l,-a*n])}let r=Pt(i,18),o=r.attributes.position;for(let c=0;c<o.count;c++){let a=-o.getY(c)/n;o.setZ(c,o.getZ(c)-t*a*a)}return r.computeVertexNormals(),r}function Of(n,e){let t=new Map;for(let i of e)t.has(i.mesh.material)||t.set(i.mesh.material,[]),t.get(i.mesh.material).push(i);for(let[i,s]of t){if(s.length<2)continue;let r=0,o=s.map(d=>{let m=d.mesh.geometry.index?d.mesh.geometry.toNonIndexed():d.mesh.geometry;return r+=m.attributes.position.count,{g:m,mat:d.mat}}),c=new Float32Array(r*3),a=new Float32Array(r*3),l=new A,h=new je,f=0;for(let{g:d,mat:m}of o){h.getNormalMatrix(m);let x=d.attributes.position,g=d.attributes.normal;for(let p=0;p<x.count;p++,f++)l.fromBufferAttribute(x,p).applyMatrix4(m),c[f*3]=l.x,c[f*3+1]=l.y,c[f*3+2]=l.z,g&&(l.fromBufferAttribute(g,p).applyMatrix3(h).normalize(),a[f*3]=l.x,a[f*3+1]=l.y,a[f*3+2]=l.z)}let u=new mt;u.setAttribute("position",new Rt(c,3)),u.setAttribute("normal",new Rt(a,3)),u.computeBoundingSphere(),n.add(new me(u,i));for(let d of s)d.merged=!0}for(let i of e)if(i.merged)for(let s of[...i.mesh.children]){let r=e.find(o=>o.mesh===s);(!r||!r.merged)&&n.attach(s)}for(let i of e)i.merged&&i.mesh.parent?.remove(i.mesh)}var Bf=n=>n.isMesh&&!n.isInstancedMesh&&!n.userData.keepTree&&!Array.isArray(n.material)&&!n.material.map&&!n.material.transparent;function hr(n){n.updateMatrixWorld(!0);let e=new at().copy(n.matrixWorld).invert(),t=[],i=s=>{if(!s.userData.keepTree){Bf(s)&&t.push({mesh:s,mat:new at().multiplyMatrices(e,s.matrixWorld)});for(let r of s.children)i(r)}};for(let s of n.children)i(s);return Of(n,t),n}function zf(n){n.updateMatrixWorld(!0);let e=[];n.traverse(t=>{!t.isMesh&&!t.userData.keepTree&&e.push(t)});for(let t of e){let i=new at().copy(t.matrixWorld).invert(),s=[],r=o=>{if(!(!o.isMesh||o.userData.keepTree)){Bf(o)&&s.push({mesh:o,mat:new at().multiplyMatrices(i,o.matrixWorld)});for(let c of o.children)r(c)}};for(let o of t.children)r(o);s.length>1&&Of(t,s)}return n}var ho={day:{label:"白天",icon:"☀️",sky:{top:4030432,upper:5938416,mid:9225207,hor:14479359,low:13625087,sun:16776170,sunSize:1600,sunGlow:.22,stars:0,milky:0},sunDir:[.35,.75,-.55],fog:[13953275,260,1500],hemi:[16777215,10471322,1.7],light:[16775406,2.2],clouds:[16777215,16317439,15660284,14871800,16777215,15988991],cloudLine:11124184,mountains:[8370314,10275490],ground:"land"},sunset:{label:"黃昏",icon:"🌇",sky:{top:4014240,upper:7034024,mid:14386590,hor:16765317,low:16429952,sun:16767372,sunSize:900,sunGlow:.28,stars:.6,milky:0},sunDir:[.55,.12,-.83],fog:[16239008,200,1250],hemi:[16772829,11827880,1.6],light:[16767408,1.9],clouds:[16773324,16768171,16498053,16163738,15909286,16770749],cloudLine:14192510,mountains:[8019136,10185926],ground:"sea",sea:[16433797,16094351,16770739]},night:{label:"夜晚",icon:"🌙",sky:{top:461606,upper:1054282,mid:1975394,hor:3814520,low:1448516,sun:16774102,sunSize:2600,sunGlow:.12,stars:1.4,milky:1},sunDir:[-.45,.42,-.78],fog:[1843280,160,1150],hemi:[9082584,2762064,1.2],light:[13161727,1],clouds:[6121113,6976680,5199752,7897781,5923478,7371438],cloudLine:2501470,mountains:[2566748,3422836],ground:"sea",sea:[1975385,2830190,8095433]}};function Vf(){let n={uTime:{value:0},uSun:{value:new A(0,1,0)},uTop:{value:new Ie},uUpper:{value:new Ie},uMid:{value:new Ie},uHor:{value:new Ie},uLow:{value:new Ie},uSunCol:{value:new Ie},uSunSize:{value:900},uSunGlow:{value:.2},uStars:{value:0},uMilky:{value:0}},e=new Vt({side:Bt,depthWrite:!1,fog:!1,uniforms:n,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform float uTime, uSunSize, uSunGlow, uStars, uMilky;
      uniform vec3 uSun, uTop, uUpper, uMid, uHor, uLow, uSunCol;
      varying vec3 vDir;
      float hash3(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
      float noise3(vec3 p){
        vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(mix(hash3(i), hash3(i+vec3(1,0,0)), f.x), mix(hash3(i+vec3(0,1,0)), hash3(i+vec3(1,1,0)), f.x), f.y),
                   mix(mix(hash3(i+vec3(0,0,1)), hash3(i+vec3(1,0,1)), f.x), mix(hash3(i+vec3(0,1,1)), hash3(i+vec3(1,1,1)), f.x), f.y), f.z);
      }
      float fbm(vec3 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++){ v += a * noise3(p); p *= 2.1; a *= 0.5; } return v; }
      float stars(vec3 d, float scale, float th){
        vec3 g = d * scale, id = floor(g);
        float h = hash3(id);
        float tw = 0.65 + 0.35 * sin(uTime * (1.5 + h * 3.0) + h * 40.0);
        return step(th, h) * smoothstep(0.42, 0.0, length(fract(g) - 0.5)) * tw;
      }
      void main(){
        vec3 d = normalize(vDir);
        float h = d.y;
        vec3 c = h > 0.0
          ? mix(mix(uHor, uMid, smoothstep(0.0, 0.22, h)), mix(uUpper, uTop, smoothstep(0.45, 0.85, h)), smoothstep(0.18, 0.5, h))
          : mix(uHor, uLow, smoothstep(0.0, -0.3, h));
        float above = smoothstep(-0.02, 0.18, h);
        // 銀河：一條斜跨天空的光帶，用雜訊做出塵埃與暗帶
        vec3 N = normalize(vec3(0.8, 0.55, 0.14)); // 讓銀河斜斜穿過主要視角（往 -z 看）
        float band = exp(-pow(dot(d, N), 2.0) / 0.018);
        float dust = fbm(d * 7.0 + 3.0);
        float lane = smoothstep(0.55, 0.75, fbm(d * 13.0)) * exp(-pow(dot(d, N), 2.0) / 0.002);
        vec3 milkCol = mix(vec3(0.55, 0.62, 1.0), vec3(1.0, 0.78, 0.92), fbm(d * 3.0));
        c += milkCol * band * (0.25 + dust * 0.55) * uMilky * above;
        c -= vec3(0.05, 0.05, 0.08) * lane * uMilky * above;
        // 星星：一般星空＋銀河裡更密
        float s = stars(d, 140.0, 0.985) + stars(d, 260.0, 0.992) * 0.7 + stars(d, 320.0, 0.97) * band * uMilky;
        c += vec3(1.0, 0.96, 0.88) * s * uStars * smoothstep(0.05, 0.35, h);
        // 太陽／月亮
        float sd = max(0.0, dot(d, normalize(uSun)));
        c += uSunCol * (pow(sd, uSunSize) * 1.4 + pow(sd, 10.0) * uSunGlow);
        gl_FragColor = vec4(c, 1.0);
      }`}),t=new me(new Ge(1800,48,24),e);return t.renderOrder=-10,t}function Gf(n){let e=new Vt({fog:!0,uniforms:cr.merge([Se.fog,{uTime:{value:0},uA:{value:new Ie},uB:{value:new Ie},uHi:{value:new Ie}}]),vertexShader:`
      varying vec2 vXZ;
      #include <fog_pars_vertex>
      void main(){
        vec4 wp = modelMatrix * vec4(position,1.0);
        vXZ = wp.xz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform float uTime; uniform vec3 uA, uB, uHi;
      varying vec2 vXZ;
      #include <fog_pars_fragment>
      void main(){
        vec2 p = vXZ * 0.012 + vec2(uTime * 0.01, 0.0);
        float n = sin(p.x * 3.0 + sin(p.y * 2.3) * 2.0) * 0.5 + sin(p.y * 4.1 - p.x * 1.7 + uTime * 0.05) * 0.5;
        vec3 c = mix(uA, uB, smoothstep(-0.6, 0.8, n));
        c = mix(c, uHi, smoothstep(0.85, 0.95, n) * 0.7);
        gl_FragColor = vec4(c, 1.0);
        #include <fog_fragment>
      }`}),t=new me(new Gt(5e3,5e3),e);return t.rotation.x=-Math.PI/2,t.position.y=n,t}function Wf(n,e){let t=new ae,i=[];for(let S=0;S<16;S++){let v=e()*Math.PI*2,T=120+e()*900;i.push(new A(Math.cos(v)*T,Math.sin(v)*T,60+e()*110))}let s=new Vt({fog:!0,uniforms:cr.merge([Se.fog,{uTime:{value:0},uForest:{value:i}}]),vertexShader:`
      varying vec2 vXZ;
      #include <fog_pars_vertex>
      void main(){
        vec4 wp = modelMatrix * vec4(position,1.0);
        vXZ = wp.xz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform float uTime; uniform vec3 uForest[16];
      varying vec2 vXZ;
      #include <fog_pars_fragment>
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y); }
      void main(){
        vec2 p = vXZ;
        // 農田拼布：每塊田一種作物顏色，田裡有一條條作物紋，田埂是淺色細線
        vec2 cell = floor(p / vec2(110.0, 80.0));
        vec2 lp = fract(p / vec2(110.0, 80.0));
        float hc = hash(cell);
        vec3 crops[5];
        crops[0] = vec3(0.62, 0.84, 0.40); crops[1] = vec3(0.86, 0.80, 0.42); crops[2] = vec3(0.50, 0.76, 0.36);
        crops[3] = vec3(0.71, 0.88, 0.52); crops[4] = vec3(0.90, 0.84, 0.55);
        vec3 c = crops[int(hc * 4.99)];
        float rows = sin((hc > 0.5 ? lp.x : lp.y) * 70.0);
        c *= 0.93 + 0.07 * rows;
        float edge = min(min(lp.x, 1.0 - lp.x), min(lp.y, 1.0 - lp.y));
        c = mix(vec3(0.93, 0.88, 0.70), c, smoothstep(0.0, 0.025, edge));
        // 森林：深綠＋樹冠點點
        float forest = 0.0;
        for (int i = 0; i < 16; i++) {
          float dd = length(p - uForest[i].xy) / uForest[i].z;
          forest = max(forest, smoothstep(1.05, 0.85, dd + (noise(p * 0.02) - 0.5) * 0.35));
        }
        vec3 fc = mix(vec3(0.20, 0.50, 0.30), vec3(0.30, 0.62, 0.36), noise(p * 0.15));
        c = mix(c, fc, forest);
        // 小溪：蜿蜒的藍色帶子＋淺色河岸，水面有流動的反光
        float center = sin(p.x * 0.004) * 180.0 + sin(p.x * 0.011 + 1.3) * 60.0 + 150.0;
        float dist = abs(p.y - center);
        c = mix(c, vec3(0.80, 0.90, 0.62), smoothstep(22.0, 16.0, dist));
        vec3 water = mix(vec3(0.36, 0.70, 0.92), vec3(0.62, 0.86, 1.0), smoothstep(0.6, 1.0, sin(p.x * 0.08 - uTime * 2.0 + p.y * 0.05)));
        c = mix(c, water, smoothstep(13.0, 10.0, dist));
        gl_FragColor = vec4(c, 1.0);
        #include <fog_fragment>
      }`}),r=new me(new Gt(5e3,5e3),s);r.rotation.x=-Math.PI/2,r.position.y=n,t.add(r);let o=new Lt(5,14,7);o.translate(0,12,0);let c=new ze(.9,1.2,6,6);c.translate(0,3,0);let a=[];for(let S of i){let v=Math.floor(S.z*.9);for(let T=0;T<v;T++){let P=e()*Math.PI*2,b=Math.sqrt(e())*S.z*.85;a.push([S.x+Math.cos(P)*b,S.y+Math.sin(P)*b,.7+e()*.8])}}let l=new Xn(o,wt(4168277),a.length),h=new Xn(o,lo(2383930,.5),a.length),f=new Xn(c,wt(9068608),a.length),u=new at,d=new zt,m=new A,x=new A;a.forEach(([S,v,T],P)=>{x.set(S,n,v),m.setScalar(T),u.compose(x,d,m),l.setMatrixAt(P,u),h.setMatrixAt(P,u),f.setMatrixAt(P,u)}),t.add(l,h,f);let g=new gt(12,8,9);g.translate(0,4,0);let p=new Lt(9.5,6,4);p.rotateY(Math.PI/4),p.translate(0,11,0);let M=36,_=new Xn(g,wt(16774886),M),y=new Xn(p,wt(14177615),M);for(let S=0;S<M;S++){let v=e()*Math.PI*2,T=150+e()*900;d.setFromAxisAngle(new A(0,1,0),e()*Math.PI),x.set(Math.cos(v)*T,n,Math.sin(v)*T),m.setScalar(.8+e()*.6),u.compose(x,d,m),_.setMatrixAt(S,u),y.setMatrixAt(S,u)}return t.add(_,y),t.userData.material=s,t}function Xf(n){let e=()=>new Vt({transparent:!0,depthWrite:!1,fog:!1,blending:yn,uniforms:{uFade:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform float uFade; varying vec2 vUv; void main(){ float a = pow(vUv.x, 2.5) * (1.0 - abs(vUv.y - 0.5) * 2.0); gl_FragColor = vec4(vec3(1.0, 0.95, 0.85), a * uFade); }"}),t=[],i=new Gt(1,1),s=new A,r=new A,o=new A,c=new A,a=new at,l=2;return{enabled:!1,update(h,f){if(l-=h,this.enabled&&l<=0){l=2.5+Math.random()*5;let u=new me(i,e());u.renderOrder=-5;let d=Math.random()*Math.PI*2,m=.3+Math.random()*.45,x=new A(Math.cos(d)*Math.cos(m),Math.sin(m),Math.sin(d)*Math.cos(m)),g=new A(-Math.sin(d),-.35-Math.random()*.4,Math.cos(d)).multiplyScalar(Math.random()<.5?1:-1).normalize();t.push({m:u,pos:f.position.clone().addScaledVector(x,1300),vel:g.multiplyScalar(700+Math.random()*400),t:0,life:.9+Math.random()*.5,len:140+Math.random()*120}),n.add(u)}for(let u=t.length-1;u>=0;u--){let d=t[u];d.t+=h,d.pos.addScaledVector(d.vel,h),c.copy(f.position).sub(d.pos).normalize(),r.copy(d.vel).normalize(),o.crossVectors(c,r).normalize(),r.crossVectors(o,c),a.makeBasis(r,o,c),d.m.quaternion.setFromRotationMatrix(a),d.m.position.copy(d.pos).addScaledVector(r,-d.len/2),d.m.scale.set(d.len,3.2,1);let m=d.t/d.life;d.m.material.uniforms.uFade.value=Math.sin(Math.min(1,m)*Math.PI),m>=1&&(n.remove(d.m),d.m.material.dispose(),t.splice(u,1))}}}}var vs=-70,r1=new A(.55,.12,-.83).normalize();function Kf(n){return()=>(n=n*16807%2147483647)/2147483647}var qf=[16773324,16768171,16498053,16163738,15909286,16770749];function o1(n){let e=new $i(1,2),t=n.length,i=new Xn(e,wt(16777215),t),s=new Xn(e,lo(14192510,.18),t),r=new at,o=new zt,c=new A,a=new A,l=new Ie;n.forEach((f,u)=>{a.set(f.x,f.y,f.z),c.set(f.r,f.r*.78,f.r),r.compose(a,o,c),i.setMatrixAt(u,r),s.setMatrixAt(u,r),i.setColorAt(u,l.set(qf[f.tone??u%qf.length]))});let h=new ae;return h.add(i,s),h.userData={body:i,line:s,list:n},h}function su(n,e,t,i,s,r){let o=5+Math.floor(r()*6),c=Math.floor(r()*6);for(let a=0;a<o;a++){let l=r()*Math.PI*2,h=r()*s*1.2,f=(r()-.3)*s*.4;n.push({x:e+Math.cos(l)*h,y:t+f,z:i+Math.sin(l)*h*.6,r:s*(.45+r()*.55),tone:f>0?c%2?0:5:c})}n.push({x:e,y:t-s*.2,z:i,r:s*1.1,tone:2+c%3})}function a1(n=1){let e=new ae,t=B(new ze(.16,.24,1.6,8),14262984,{thick:.04});t.position.y=.8,e.add(t);let i=B(new Ge(1.1,16,10,0,Math.PI*2,0,Math.PI/2),5421455,{thick:.06});i.position.y=1.5,i.scale.y=.7,e.add(i);let s=B(new st(1.05,.12,8,24),4168330,{thick:.03});return s.rotation.x=Math.PI/2,s.position.y=1.5,e.add(s),e.scale.setScalar(n),e}var iu=new Map;function ru(n,e=1){let t=n+"|"+e;return iu.has(t)||iu.set(t,Ct(n,e)),iu.get(t)}var c1=new We({color:2892902}),uo={rim:8019919,rim2:6114227,body:4930716,grass:5684111,grass2:4169612},$f=[16030401,12887024,16762767,9425863,16242336,15239078],Yf;function l1(){return Yf??=new Vt({transparent:!0,depthWrite:!1,side:ot,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"varying vec3 vN; varying vec3 vV; void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 2.5); gl_FragColor = vec4(mix(vec3(1.0,0.92,0.78), vec3(1.0,0.97,0.9), f), 0.08 + f * 0.55); }"}),Yf}function h1(n,e){let t=new ae,i=Math.floor(6+n*1.2);for(let o=0;o<i;o++){let c=e()*Math.PI*2,a=Math.sqrt(e())*n*.8,l=(1.5+e()*4)*(1.3-a/n),h=.6+e()*1.1,f=$f[Math.floor(e()*$f.length)],u=e()<.35,d=B(u?new ze(h*.6,h*.7,l,12):new gt(h,l,h),f,{thick:.04});if(d.position.set(Math.cos(c)*a,l/2,Math.sin(c)*a),t.add(d),e()<.4){let m=B(new Ge(h*.55,12,8,0,Math.PI*2,0,Math.PI/2),5421455,{thick:.03});m.position.set(d.position.x,l,d.position.z),t.add(m)}if(l>2.5){let m=new me(new Gt(h*.5,l*.5),ru(16769696,1));m.position.set(d.position.x,l*.55,d.position.z+(u?h*.62:h/2+.01)),t.add(m)}}let s=B(new ze(.25,.9,n*.75,10),15972304,{thick:.05});s.position.y=n*.375,t.add(s);let r=B(new Lt(.3,1.2,8),15778632,{mat:ru(16766556,1),line:12159516,thick:.03});return r.position.y=n*.75+.6,t.add(r),t}function Zf(n,e,t,i={}){let s=new ae;s.add(B(Pt([[0,.6],[n*.93,.6],[n*.97,.45],[n*.97,.3]].reverse(),32),uo.grass,{thick:.1}));for(let a=0;a<4;a++){let l=t()*Math.PI*2,h=n*(.3+t()*.5),f=n*(.12+t()*.12),u=B(new Ge(f,14,8,0,Math.PI*2,0,Math.PI/2),uo.grass2,{thick:.06});u.scale.y=.45,u.position.set(Math.cos(l)*h,.55,Math.sin(l)*h),s.add(u)}s.add(B(Pt([[n*.97,.32],[n*1.07,.15],[n*1.07,-.55],[n*.99,-.85]].reverse(),40),uo.rim,{thick:.12})),s.add(B(Pt([[n*.92,-.85],[n*.95,-1.6],[n*.78,-2.4]].reverse(),32),uo.rim2,{thick:.12})),s.add(B(Pt([[n*.6,-2.3],[n*.52,-e*.32],[n*.4,-e*.5],[n*.16,-e*.82],[.01,-e]].reverse(),20),uo.body,{thick:.12}));let r=new ae,o=Math.floor(n*.9);for(let a=0;a<o;a++){let l=a/o*Math.PI*2,h=new me(new gt(n*.12,.16,.08),ru(a%3?16767392:16752324,1));h.position.set(Math.cos(l)*n*1.075,-.2,Math.sin(l)*n*1.075),h.rotation.y=-l+Math.PI/2,r.add(h)}for(let a=0;a<8;a++){let l=a/8*Math.PI*2,h=-e*(.2+a%3*.08),f=n*(.55-a%3*.04),u=new me(new gt(n*.16,n*.1,.1),c1);u.position.set(Math.cos(l)*f,h,Math.sin(l)*f),u.rotation.y=-l+Math.PI/2,r.add(u)}if(s.add(r),i.city){let a=h1(n*.45,t);a.position.set(n*.35,.6,-n*.3),s.add(a);let l=new me(new Ge(n*.5,32,16,0,Math.PI*2,0,Math.PI/2),l1());l.position.copy(a.position),l.renderOrder=4,s.add(l)}let c=Math.floor(n/(i.city?6:4));for(let a=0;a<c;a++){let l=t()*Math.PI*2,h=n*(.35+t()*.5),f=Math.cos(l)*h,u=Math.sin(l)*h;if(i.city&&Math.hypot(f-n*.35,u+n*.3)<n*.55||i.clear&&Math.hypot(f-i.clear[0],u-i.clear[1])<i.clear[2])continue;let d=a1(.7+t()*.7);d.position.set(f,.6,u),s.add(d)}return s}function u1(n){let e=new ae;for(let t=0;t<26;t++){let i=t/26*Math.PI*2+n()*.2,s=1150+n()*250,r=70+n()*130,o=150+n()*150,c=new Yi({color:t%2?8019136:10185926,fog:!1});c.userData.alt=t%2;let a=B(new Lt(o,r,5+Math.floor(n()*3)),0,{mat:c,outline:!1});a.position.set(Math.cos(i)*s,vs+r/2-20,Math.sin(i)*s),a.rotation.y=n()*3,e.add(a)}return e}function d1(){let n=new ae,e=B(Je(4,2.2,2.4,.2),16183783,{thick:.05});e.position.y=1.1,n.add(e);let t=B(Je(4.2,.25,2.6,.08),5205232,{thick:.04});t.position.y=1.15,n.add(t);for(let c=0;c<8;c++){let a=B(new gt(.55,.08,1.6),c%2?16777215:5205232,{thick:.03});a.position.set(-1.92+c*.55,2.9,1.3),a.rotation.x=.35,n.add(a)}for(let c of[-1.9,1.9]){let a=B(new ze(.06,.06,1,8),15778632,{thick:.02});a.position.set(c,2.5,1.9),n.add(a)}let i=new ae,s=B(Pt([[0,0],[.55,0],[.7,1.9],[0,1.9]],20),14857356,{thick:.05});i.add(s);for(let c=0;c<16;c++){let a=c*2.4,l=.15+c%4*.2,h=new me(new Ge(.13,10,8),wt(3876384));h.position.set(Math.cos(a)*.58,l,Math.sin(a)*.58),i.add(h)}let r=B(new ze(.72,.72,.1,20),16777215,{thick:.03});r.position.y=1.95,i.add(r);let o=B(new ze(.09,.09,1.4,8),5205232,{thick:.03});return o.position.set(.15,2.5,0),o.rotation.z=-.15,i.add(o),i.position.set(0,2.25,0),i.userData.keepTree=!0,n.add(i),n.userData.cup=i,n}function f1(n){let e=new ae,t=[[0,0,26,7],[-16,4,18,5],[16,4,18,5],[-30,10,12,4],[30,10,12,4],[0,-14,14,4.5]];for(let[r,o,c,a]of t){let l=B(new ze(a,a*1.1,c,16),16054011,{thick:.3});l.position.set(r,c/2,o),e.add(l);let h=B(new Lt(a*1.3,a*2.2,16),5205232,{thick:.3});h.position.set(r,c+a*1.1,o),e.add(h);let f=B(new gt(.2,3,.2),15778632,{thick:.08});f.position.set(r,c+a*2.2+1.5,o),e.add(f)}let i=B(new st(5,.8,10,24,Math.PI),15778632,{mat:Ct(16766556,1),line:12159516,thick:.25});i.position.set(0,0,8),e.add(i),e.position.set(40,110,-720);let s=Kf(99);for(let r=0;r<9;r++)su(n,40+(s()-.5)*110,90+s()*3,-720+(s()-.5)*60,12+s()*8,s);return e}function Wa(n,e,t){let s=new Float32Array(660),r=[];for(let h=0;h<220;h++)r.push([Math.random()*Math.PI*2,Math.random(),t*(.3+Math.random()*.7)]);let o=new mt;o.setAttribute("position",new Rt(s,3));let c=new ir(o,new ps({color:16777215,size:.9,transparent:!0,opacity:.85,depthWrite:!1}));c.frustumCulled=!1;let a=220,l=vs+10;return{obj:c,x:n,z:e,r:t,y0:l,y1:l+a,update(h){for(let f=0;f<220;f++){let[u,d,m]=r[f],x=(d+h*.06)%1,g=u+h*1.2+x*6;s[f*3]=n+Math.cos(g)*m,s[f*3+1]=l+x*a,s[f*3+2]=e+Math.sin(g)*m}o.attributes.position.needsUpdate=!0}}}function p1(){let n=[];for(let i=0;i<12;i++){let s=i/12*Math.PI*2,r=150+Math.sin(s*2)*50,o=new A(Math.sin(s)*r,20+Math.sin(s*3)*25+i*2,-Math.cos(s)*r-40);n.push(o)}return n.map((i,s)=>{let r=new ae;r.position.copy(i);let o=n[(s+1)%12];r.lookAt(o);let c=B(new st(4.2,.38,10,40),15778632,{mat:Ct(16766556,.95),line:12159516,thick:.08});r.add(c);let a=sn(16769162,14);return a.material.opacity=0,r.add(a),{g:r,torus:c,sp:a,pos:i,normal:new A(0,0,1).applyQuaternion(r.quaternion),passed:!1}})}function Jf(n){n.fog=new Ea(16239008,200,1250);let e=Vf();n.add(e);let t=Gf(vs);n.add(t);let i=new Si(16772829,11827880,1.6);n.add(i);let s=new wi(16767408,1.9);s.position.copy(r1).setY(.55).multiplyScalar(100);let r=Xf(n);n.add(s);let o=Kf(1234),c=[];for(let _=0;_<70;_++){let y=o()*Math.PI*2,S=120+o()*650;su(c,Math.cos(y)*S,-30+o()*170,Math.sin(y)*S,8+o()*16,o)}for(let _=0;_<60;_++){let y=o()*Math.PI*2,S=o()*900;su(c,Math.cos(y)*S,vs+18+o()*8,Math.sin(y)*S,18+o()*20,o)}let a=hr(f1(c));n.add(a);let l=o1(c);n.add(l);let h=Wf(vs,o);n.add(h);let f=[];[[0,-4,0,30],[140,30,-230,24],[-190,10,-120,21],[-60,55,210,26],[230,-10,120,18],[-260,70,-360,22]].forEach(([_,y,S,v],T)=>{let P=hr(Zf(v,v*(T?2.6:2),o,T===0?{clear:[0,-6,9]}:{city:!0}));P.position.set(_,y,S),n.add(P),f.push({g:P,x:_,z:S,top:y+.6,baseX:_,baseY:y,baseZ:S,r:v*.95,phase:T*1.7,delta:new A})});let d=[];for(let _=0;_<16;_++){let y=8+o()*26,S=hr(Zf(y,y*2.6,o,{city:o()<.75})),v=o()*Math.PI*2,T=320+o()*520;d.push({g:S,a:v,d:T,y:-10+o()*150,speed:(.004+o()*.006)*(o()<.5?-1:1),bob:o()*6}),n.add(S)}let m=hr(u1(o));n.add(m);let x=f[0],g=hr(d1());g.position.set(0,x.top,-8),n.add(g);let p=[Wa(60,-120,14),Wa(-120,40,12),Wa(170,60,14),Wa(-200,-260,16)];p.forEach(_=>n.add(_.obj));let M=p1();return M.forEach(_=>n.add(_.g)),{home:x,islands:f,updrafts:p,rings:M,shop:g,castle:a,spawn:new A(0,x.top+.95,6),sky:"sunset",setSky(_){let y=ho[_]||ho.sunset;this.sky=_;let S=e.material.uniforms,v=y.sky;S.uTop.value.set(v.top),S.uUpper.value.set(v.upper),S.uMid.value.set(v.mid),S.uHor.value.set(v.hor),S.uLow.value.set(v.low),S.uSunCol.value.set(v.sun),S.uSunSize.value=v.sunSize,S.uSunGlow.value=v.sunGlow,S.uStars.value=v.stars,S.uMilky.value=v.milky,S.uSun.value.set(...y.sunDir).normalize(),i.color.set(y.hemi[0]),i.groundColor.set(y.hemi[1]),i.intensity=y.hemi[2],s.color.set(y.light[0]),s.intensity=y.light[1],s.position.set(...y.sunDir).normalize().setY(Math.max(.35,y.sunDir[1])).multiplyScalar(100),this.applyFog();let{body:T,line:P,list:b}=l.userData,E=new Ie;b.forEach((F,C)=>T.setColorAt(C,E.set(y.clouds[F.tone??C%y.clouds.length]))),T.instanceColor.needsUpdate=!0,P.material.uniforms.uColor.value.set(y.cloudLine),m.traverse(F=>{F.isMesh&&F.material.color.set(y.mountains[F.material.userData.alt?0:1])});let N=y.ground==="land";if(h.visible=N,t.visible=!N,!N){let F=t.material.uniforms;F.uA.value.set(y.sea[0]),F.uB.value.set(y.sea[1]),F.uHi.value.set(y.sea[2])}r.enabled=_==="night"},applyFog(){let _=(ho[this.sky]||ho.sunset).fog;n.fog.color.set(_[0]),n.fog.near=_[1],n.fog.far=_[2]},update(_,y,S=.016){t.material.uniforms.uTime.value=_,e.material.uniforms.uTime.value=_,h.userData.material.uniforms.uTime.value=_,y&&r.update(S,y);for(let v of f){let T=Math.sin(_*.35+v.phase)*.9,P=v.baseX+Math.sin(_*.13+v.phase)*2.2,b=v.baseZ+Math.cos(_*.11+v.phase*1.3)*1.8;v.delta.set(P-v.x,0,b-v.z),v.x=P,v.z=b,v.g.position.set(P,v.baseY+T,b),v.top=v.baseY+.6+T}g.position.set(x.x,x.top,x.z-8);for(let v of d){let T=v.a+_*v.speed;v.g.position.set(Math.cos(T)*v.d,v.y+Math.sin(_*.25+v.bob)*4,Math.sin(T)*v.d),v.g.rotation.y=_*v.speed*3}for(let v of p)v.update(_);g.userData.cup.rotation.y=_*.5}}}var dr={phiLength:2,thetaStart:1.25,thetaLength:1},ou=512,ep=256,ur=256,fo=n=>ou/2+n*ur,po=n=>(n-dr.thetaStart)*ur,m1={neutral:{},smile:{mouth:"smile"},smug:{lid:.16,mouth:"smile",brow:.15},happy:{eye:"happy",mouth:"grin",open:.6,brow:.5},surprised:{eye:"wide",mouth:"o",open:.9,brow:.9},determined:{lid:.12,mouth:"flat",brow:-.8},effort:{eye:"squeeze",mouth:"open",open:.55,brow:-.6},worried:{mouth:"wobble",brow:.6,browSad:!0}};function jf(n,e,t){n.beginPath(),n.moveTo(-e*.5,-t*.05),n.bezierCurveTo(-e*.45,-t*.55,e*.35,-t*.62,e*.55,-t*.28),n.bezierCurveTo(e*.55,t*.25,e*.25,t*.52,-e*.05,t*.5),n.bezierCurveTo(-e*.35,t*.48,-e*.52,t*.25,-e*.5,-t*.05),n.closePath()}function g1(n,e,t,i,s,r){let o=r.eye==="wide"?1.12:1,c=s.eyeW*ur*o,a=s.eyeH*ur*o;if(n.save(),n.translate(e,t),i<0&&n.scale(-1,1),n.lineCap="round",n.lineJoin="round",r.eye==="happy"||r.eye==="squeeze"||r.blink>.92){n.strokeStyle=s.lash,n.lineWidth=s.lashW,n.beginPath(),r.eye==="happy"?(n.moveTo(-c*.45,a*.12),n.quadraticCurveTo(0,-a*.5,c*.5,a*.08)):r.eye==="squeeze"?(n.moveTo(c*.45,-a*.3),n.lineTo(-c*.3,a*.02),n.lineTo(c*.45,a*.3)):(n.moveTo(-c*.5,a*.05),n.quadraticCurveTo(0,a*.32,c*.55,-a*.05)),n.stroke(),n.restore();return}jf(n,c,a),n.fillStyle="#ffffff",n.fill(),n.save(),jf(n,c,a),n.clip();let l=c*.42*(r.eye==="wide"?.85:1),h=a*.5*(r.eye==="wide"?.85:1),f=-c*.02+r.gx*c*.2*i,u=a*.06+r.gy*a*.16,d=n.createLinearGradient(0,u-h,0,u+h);d.addColorStop(0,s.irisTop),d.addColorStop(.55,s.iris),d.addColorStop(1,s.irisBottom),n.fillStyle=d,n.beginPath(),n.ellipse(f,u,l,h,0,0,Math.PI*2),n.fill(),n.strokeStyle=s.irisTop,n.lineWidth=2.5,n.stroke(),n.fillStyle=s.pupil,n.beginPath(),s.slit?n.ellipse(f,u+h*.05,l*(r.eye==="wide"?.3:.16),h*.68,0,0,Math.PI*2):n.ellipse(f,u+h*.05,l*(r.eye==="wide"?.26:.38),h*(r.eye==="wide"?.3:.42),0,0,Math.PI*2),n.fill(),n.globalAlpha=.45,n.fillStyle=s.irisGlow,n.beginPath(),n.ellipse(f,u+h*.55,l*.7,h*.28,0,0,Math.PI*2),n.fill(),n.globalAlpha=1;let m=f-l*.25,x=u-h*.45,g=Math.min(l,h)*.38;n.fillStyle="#ffffff",n.beginPath();for(let _=0;_<8;_++){let y=_/8*Math.PI*2-Math.PI/2,S=_%2===0?g:g*.28;n.lineTo(m+Math.cos(y)*S,x+Math.sin(y)*S)}n.closePath(),n.fill(),n.beginPath(),n.arc(f+l*.15,u+h*.55,g*.28,0,Math.PI*2),n.fill();let p=Math.min(1,(r.lid??s.lid)+r.blink);p>0&&(n.fillStyle=s.skin,n.fillRect(-c,-a,c*2,a*(.4+p*1.05))),n.restore();let M=p*a*.95;n.strokeStyle=s.lash,n.lineWidth=s.lashW,n.beginPath(),n.moveTo(-c*.52,-a*.02+M*.35),n.quadraticCurveTo(-c*.1,-a*.65+M,c*.6,-a*.28+M*.5),n.stroke(),s.liner2&&(n.strokeStyle=s.liner2,n.lineWidth=s.lashW*.9,n.beginPath(),n.moveTo(c*.2,-a*.42+M*.6),n.quadraticCurveTo(c*.55,-a*.35+M*.4,c*.72,-a*.12),n.stroke()),n.lineWidth=s.lashW*.7,n.strokeStyle=s.lash,n.beginPath(),n.moveTo(c*.45,-a*.3+M*.4),n.lineTo(c*.72,-a*.4+M*.3),n.stroke(),s.shadow&&(n.globalAlpha=.55,n.fillStyle=s.shadow,n.beginPath(),n.moveTo(-c*.55,-a*.05),n.quadraticCurveTo(-c*.1,-a*.85,c*.75,-a*.4),n.quadraticCurveTo(-c*.1,-a*.6,-c*.55,-a*.05),n.fill(),n.globalAlpha=1),n.lineWidth=1.6,n.globalAlpha=.6,n.beginPath(),n.moveTo(c*.05,a*.5),n.quadraticCurveTo(c*.35,a*.45,c*.5,a*.2),n.stroke(),n.globalAlpha=1,n.restore()}function x1(n,e,t,i,s,r){let o=s.eyeW*ur,c=s.eyeH*ur,a=r.brow||0;n.save(),n.translate(e,t),i<0&&n.scale(-1,1),n.lineWidth=2.6,n.lineCap="round",n.strokeStyle=s.brow;let l=-a*c*.18,h=r.browSad?-c*.2:a<0?-a*c*.28:0;n.beginPath(),n.moveTo(-o*.32,-c*.98+l+h),n.quadraticCurveTo(o*.1,-c*1.1+l,o*.48,-c*.98+l+(r.browSad?c*.1:0)),n.stroke(),n.restore()}function y1(n,e,t){let i=fo(0),s=po(e.mouthTheta),r=t.mouth||e.mouth,o=t.open||0;n.strokeStyle=e.mouthLine,n.lineWidth=2.4,n.lineCap="round",n.lineJoin="round";let c=a=>{n.fillStyle="#9c4a4f",n.beginPath(),a(),n.fill(),n.save(),n.beginPath(),a(),n.clip(),n.fillStyle="#e88a8e",n.beginPath(),n.ellipse(i,s+9*o+4,9,5*o+2,0,0,Math.PI*2),n.fill(),n.restore(),n.beginPath(),a(),n.stroke()};if(r==="cat")o>.15&&c(()=>{n.moveTo(i-12,s),n.quadraticCurveTo(i,s+22*o,i+12,s),n.quadraticCurveTo(i,s+4,i-12,s)}),n.beginPath(),n.moveTo(i-16,s-2),n.quadraticCurveTo(i-8,s+8,i,s),n.quadraticCurveTo(i+8,s+8,i+16,s-2),n.stroke(),n.fillStyle="#ffffff",n.beginPath(),n.moveTo(i+4,s+3),n.lineTo(i+10,s+3),n.lineTo(i+7,s+10),n.closePath(),n.fill(),n.lineWidth=1.2,n.stroke();else if(r==="grin"||r==="open"){let a=r==="grin"?15:10,l=6+o*14;c(()=>{n.moveTo(i-a,s-2),n.quadraticCurveTo(i,s+2,i+a,s-2),n.quadraticCurveTo(i+a*.6,s+l,i,s+l),n.quadraticCurveTo(i-a*.6,s+l,i-a,s-2)})}else r==="o"?c(()=>{n.ellipse(i,s+3,5+o*3,5+o*7,0,0,Math.PI*2)}):r==="flat"?(n.beginPath(),n.moveTo(i-10,s+1),n.lineTo(i+10,s),n.stroke()):r==="wobble"?(n.beginPath(),n.moveTo(i-12,s+2),n.quadraticCurveTo(i-6,s-3,i,s+1),n.quadraticCurveTo(i+6,s+5,i+12,s),n.stroke()):r==="talk"?o>.15?c(()=>{n.ellipse(i,s+2,7,2+o*9,0,0,Math.PI*2)}):(n.beginPath(),n.moveTo(i-9,s),n.quadraticCurveTo(i,s+5,i+9,s-1),n.stroke()):(n.beginPath(),n.moveTo(i-12,s-1),n.quadraticCurveTo(i,s+7,i+13,s-3),n.stroke())}function Qf(n,e,t){n.clearRect(0,0,ou,ep);for(let i of[-1,1]){let s=fo(i*.52),r=po(e.eyeTheta+.25),o=n.createRadialGradient(s,r,0,s,r,34),c=t.eye==="happy"||t.blush?.75:.5;o.addColorStop(0,`rgba(244,150,150,${c})`),o.addColorStop(1,"rgba(244,150,150,0)"),n.fillStyle=o,n.beginPath(),n.ellipse(s,r,40,24,0,0,Math.PI*2),n.fill()}for(let i of[1,-1])g1(n,fo(i*e.eyeX),po(e.eyeTheta),i,e,t),x1(n,fo(i*e.eyeX),po(e.eyeTheta),i,e,t);n.fillStyle="rgba(200,140,130,0.6)",n.beginPath(),n.arc(fo(0),po(e.eyeTheta+.2),1.8,0,Math.PI*2),n.fill(),y1(n,e,t)}function tp(n){let e=document.createElement("canvas");e.width=ou,e.height=ep;let t=e.getContext("2d"),i=new An(e);i.colorSpace=qt,i.anisotropy=4;let s={gx:0,gy:0,blink:0,eye:"normal",lid:void 0,mouth:void 0,open:0,brow:0,browSad:!1},r={gx:0,gy:0},o="neutral",c=0,a=n.rest||"neutral",l=1+Math.random()*3,h=-1,f=.5,u={x:0,y:0},d="",m={texture:i,talking:!1,setExpression(x,g=0){g?(o=x,c=g):(a=x,c||(o=x))},look(x,g){Number.isFinite(x)&&Number.isFinite(g)&&(r.gx=Dt.clamp(x,-1,1),r.gy=Dt.clamp(g,-1,1))},update(x,g){c>0&&(c-=x,c<=0&&(c=0,o=a));let p=m1[o]||{};s.eye=p.eye||"normal",s.lid=p.lid,s.mouth=p.mouth,s.open=p.open||0,s.brow=p.brow||0,s.browSad=!!p.browSad,m.talking&&!p.eye&&(s.mouth=n.mouth==="cat"?"cat":"talk",s.open=Math.max(0,Math.sin(g*15)*.5+Math.sin(g*9.3)*.4)),l-=x,l<=0&&h<0&&(h=0,l=2+Math.random()*3),h>=0&&(h+=x/.16,s.blink=h<.5?h*2:Math.max(0,2-h*2),h>=1&&(h=-1,s.blink=0)),f-=x,f<=0&&(f=.6+Math.random()*1.8,u={x:(Math.random()-.5)*.3,y:(Math.random()-.5)*.2});let M=1-Math.exp(-x*14);s.gx+=(r.gx+u.x-s.gx)*M,s.gy+=(r.gy+u.y-s.gy)*M;let _=[s.eye,s.lid,s.mouth,Math.round(s.open*6),s.brow,s.browSad,Math.round(s.blink*5),Math.round(s.gx*20),Math.round(s.gy*20)].join("|");_!==d&&(d=_,Qf(t,n,s),i.needsUpdate=!0)}};return Qf(t,n,s),m}var Xa={angel:{eyeX:.37,eyeTheta:1.66,eyeW:.37,eyeH:.37,lid:.1,rest:"smile",iris:"#e8922a",irisTop:"#7a3f12",irisBottom:"#ffc76b",irisGlow:"#ffe2a8",pupil:"#4a230c",slit:!1,lash:"#4b4f5c",lashW:5,brow:"#a0a6b2",skin:"#fdeee6",shadow:null,mouth:"smile",mouthTheta:2.04,mouthLine:"#b9776f"},fox:{eyeX:.39,eyeTheta:1.64,eyeW:.4,eyeH:.44,lid:0,rest:"neutral",iris:"#e98d1c",irisTop:"#8a4a0e",irisBottom:"#ffbe55",irisGlow:"#ffd98f",pupil:"#5b2b08",slit:!0,lash:"#5c6170",lashW:5.5,brow:"#b5bac6",skin:"#fdeee6",shadow:"#9ea4b8",mouth:"cat",mouthTheta:2.02,mouthLine:"#9a6b66"},boba:{eyeX:.38,eyeTheta:1.66,eyeW:.37,eyeH:.39,lid:.04,rest:"neutral",iris:"#6f86d6",irisTop:"#2f3f8f",irisBottom:"#b9c8f5",irisGlow:"#dbe4ff",pupil:"#25306b",slit:!1,lash:"#2c3466",lashW:5,brow:"#9aa3c4",skin:"#fdeee6",shadow:null,liner2:"#a8303a",mouth:"o",mouthTheta:2.06,mouthLine:"#b9776f"}};var _n=16641766,Mn=13214102;function Zn(n,e,t,i=.006,s){return B(new bi(n,e,4,12),t,{thick:i,line:s})}function Ft(n,e,t,i){let s=new ae;return s.position.set(e,t,i),n.add(s),s}function np(n,e,t){let i=n.attributes.position;for(let s=0;s<i.count;s++){let r=i.getX(s),o=i.getY(s),c=i.getZ(s),a=o/e;if(a<0){let l=-a,h=l*l;o*=1+.3*t,r*=1-.36*t*h,c*=c>0?1-.06*t*h:1-.3*t*h}i.setXYZ(s,r,o,c)}return n.computeVertexNormals(),n}function cu({r:n,face:e,hair:t,hairColor:i,streak:s,tipColor:r,hairLine:o,jaw:c=1}){let a=new ae,l=B(np(new Ge(n,40,32),n,c),_n,{thick:.006,line:Mn});l.scale.set(1,1.02,.97),a.add(l);let h=tp(e),f=new We({map:h.texture,transparent:!0,depthWrite:!1}),u=np(new Ge(n*1.004,48,24,Math.PI/2-dr.phiLength/2,dr.phiLength,dr.thetaStart,dr.thetaLength),n*1.004,c),d=new me(u,f);d.renderOrder=2,l.add(d);let m=Nf(0),x=n*t.scale,g=wt(16777215,{unique:!0,side:ot,map:Ff(i,s,r)}),p=B(Hf({r:x,...t}),16777215,{mat:g,line:o,thick:.007,windU:m});return v1(g,m),p.position.set(0,t.y??n*.06,t.z??-n*.04),a.add(p),{head:a,skull:l,shell:p,windU:m,face:h}}function v1(n,e){n.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform vec3 uWind; uniform float uWindStart; uniform float uTime;
vec3 windDeform(vec3 p){ float d = max(0.0, uWindStart - p.y); float k = d*d; p += uWind*k;
p.x += sin(uTime*4.0 + p.y*9.0)*0.06*k*length(uWind); return p; }`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = windDeform(transformed);`)},n.customProgramCacheKey=()=>"hairwind"+n.uuid}function _1(n){let e=new ae,t=16173381,i=B(new st(n,n*.16,10,40),t,{mat:Ct(16766556,1.05),line:12159516,thick:.005});i.rotation.x=Math.PI/2,e.add(i),[.3,1.2,1.9,2.6,3.4,4.3,5.1,5.8].forEach((o,c)=>{let a=n*(.25+c*37%5*.09),l=B(new bi(n*.07,a,3,8),t,{mat:Ct(16766556,1),line:12159516,thick:.004});l.position.set(Math.cos(o)*n,-a/2-n*.05,Math.sin(o)*n),e.add(l);let h=B(new Ge(n*.1,10,8),t,{mat:Ct(16766556,1),line:12159516,thick:.004});h.position.set(Math.cos(o)*n,-a-n*.1,Math.sin(o)*n),h.scale.y=1.25,e.add(h)});let r=sn(16765024,n*3.2);return r.material.opacity=.55,e.add(r),e}var _s=[{name:"初生白羽",root:16777215,mid:16251132,tip:14673650},{name:"晴空藍",root:16777215,mid:14674687,tip:9419007},{name:"星夜紫",root:16777215,mid:13620991,tip:9077996},{name:"薰衣草",root:16777215,mid:15848191,tip:12615654},{name:"櫻花粉",root:16775144,mid:16765926,tip:16748472},{name:"夕陽橘粉",root:16773832,mid:16760736,tip:16743080},{name:"黃金晚霞",root:16776166,mid:16766556,tip:16740252,glow:!0}];function M1(n){let e=wt(16777215,{unique:!0}),t={uRoot:{value:new Ie(_s[0].root)},uMid:{value:new Ie(_s[0].mid)},uTip:{value:new Ie(_s[0].tip)},uSpan:{value:n*1.3}};return e.onBeforeCompile=i=>{Object.assign(i.uniforms,t),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform float uSpan;
varying float vWingT;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWingT = clamp(length(position.xy) / uSpan, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uRoot; uniform vec3 uMid; uniform vec3 uTip;
varying float vWingT;`).replace("vec4 diffuseColor = vec4( diffuse, opacity );",`vec3 wc = vWingT < 0.5 ? mix(uRoot, uMid, vWingT * 2.0) : mix(uMid, uTip, (vWingT - 0.5) * 2.0);
vec4 diffuseColor = vec4( wc, opacity );`)},e.customProgramCacheKey=()=>"wing"+e.uuid,e.userData.wingUniforms=t,e}function ip(n,e,t){let i=new ae,s=16119803,r=9410986;return[{n:9,len0:.5,len1:.95,w:.1,reach:1,dy:0,z:0},{n:8,len0:.32,len1:.55,w:.1,reach:.9,dy:.03,z:.012},{n:7,len0:.18,len1:.28,w:.11,reach:.8,dy:.05,z:.024}].forEach(c=>{for(let a=0;a<c.n;a++){let l=a/(c.n-1),h=1.45-l*1.2,f=e*(c.len0+(c.len1-c.len0)*l),u=B(Ga(e*c.w,f,{bendX:f*.12*n,flat:.22,seg:8,hseg:5}),s,{line:r,thick:.004,mat:t});u.rotation.z=(Math.PI/2-h)*n,u.position.set(n*(.02+l*e*.5*c.reach),Math.sin(l*Math.PI*.8)*e*.22+c.dy*e,c.z),i.add(u)}}),i}function fr(){let n=new ae,e={},t=Ft(n,0,0,0);e.pelvis=t;let i=5533935,s=7112438,r=3421759,o=7031342;for(let S of[-1,1]){let v=S<0?"l":"r",T=Ft(t,S*.075,-.05,0),P=Zn(.054,.3,_n,.006,Mn);P.position.y=-.18,T.add(P);let b=Ft(T,0,-.37,0),E=Zn(.044,.3,_n,.006,Mn);E.position.y=-.18,b.add(E);let N=B(Pt([[.047,-.36],[.066,-.33],[.07,-.28],[.062,-.24],[.05,-.22]],16),s,{thick:.006});b.add(N);let F=B(Je(.1,.075,.2,.03),16251130,{thick:.006,line:9278368});F.position.set(0,-.42,.035),b.add(F);let C=B(Je(.105,.022,.205,.01),13225688,{thick:.004});C.position.set(0,-.455,.035),b.add(C),e[v+"Hip"]=T,e[v+"Knee"]=b}let c=B(nu(.13,.27,.32,20,.014,.07),r,{thick:.006,side:ot});c.position.y=-.07,t.add(c),rp(t,e),e.skirt=c;let a=B(new st(.13,.016,8,32),o,{thick:.004});a.rotation.x=Math.PI/2,a.scale.set(1,.74,1),a.position.y=.085,t.add(a);let l=B(new gt(.04,.03,.01),14672874,{thick:.003});l.position.set(0,.085,.1),t.add(l);let h=Ft(t,0,.06,0);e.spine=h;let f=B(Pt([[.118,0],[.128,.1],[.146,.24],[.15,.33],[.13,.4],[.05,.43]],24),i,{thick:.007});f.scale.z=.72,h.add(f);for(let S of[-1,1]){let v=B(new Lt(.04,.08,3),s,{thick:.004});v.rotation.set(Math.PI,0,S*.5),v.scale.z=.3,v.position.set(S*.032,.39,.085),h.add(v)}h.add(op(.034,.05,.24,.51));for(let S of[-1,1]){let v=S<0?"l":"r",T=Ft(h,S*.165,.37,0),P=B(new ze(.052,.058,.13,14),i,{thick:.006});P.position.y=-.05,T.add(P);let b=Zn(.034,.18,_n,.005,Mn);b.position.y=-.12,T.add(b);let E=Ft(T,0,-.25,0),N=Zn(.03,.17,_n,.005,Mn);N.position.y=-.11,E.add(N);let F=B(new Ge(.04,14,10),_n,{thick:.005,line:Mn});F.scale.set(.8,1.15,.6),F.position.y=-.25,E.add(F),e[v+"Shoulder"]=T,e[v+"Elbow"]=E,e[v+"Hand"]=F}let u=Ft(h,0,.5,0);e.neck=u;let d=cu({r:.165,face:Xa.angel,jaw:1,hair:{scale:1.1,spikes:16,spikeDepth:.4,flare:.1,back:.05,lengthKeys:[[0,1.42],[.45,1.5],[.72,1.62],[.9,4.4],[1.35,3.6],[2,5.2],[Math.PI,6]]},hairColor:"#eef1f5",streak:"#b9c2d0",tipColor:"rgba(196,214,236,0.6)",hairLine:10134450});d.head.position.set(0,.215,.012),u.add(d.head),e.head=d.head;let m=_1(.11);m.position.set(0,.25,-.03),m.rotation.x=-.28,d.head.add(m),e.halo=m;let x=new ae;x.position.set(0,.32,-.2),h.add(x);let g=M1(.7),p=ip(-1,.7,g),M=ip(1,.7,g);e.wingMat=g,p.position.x=-.04,M.position.x=.04,x.add(p,M),e.lWing=p,e.rWing=M,e.wings=x;let _=Ft(h,0,.22,-.2);e.mount=_;for(let S of[-1,1]){let v=B(new st(.12,.012,6,20,Math.PI*.95),3817290,{thick:.003});v.rotation.set(0,Math.PI/2,Math.PI*.55),v.position.set(S*.09,.3,-.02),h.add(v)}let y=B(new ze(.05,.05,.02,20),15911244,{thick:.004});return y.rotation.x=Math.PI/2,_.add(y),e.plate=y,lu(n,e,[d],{standHeight:.84+.05})}function qa(){let n=new ae,e={},t=Ft(n,0,0,0);e.pelvis=t;let i=13127500,s=10369594;for(let p of[-1,1]){let M=p<0?"l":"r",_=Ft(t,p*.06,-.1,0),y=Zn(.05,.12,_n,.006,Mn);y.position.y=-.1,_.add(y);let S=Ft(_,0,-.2,0),v=B(Je(.1,.06,.15,.028),12730175,{thick:.006});v.position.set(0,-.02,.02),S.add(v);let T=B(new $i(.022,1),16777215,{thick:.004,line:10528432});T.position.set(0,.005,.085),S.add(T),e[M+"Hip"]=_,e[M+"Knee"]=S}let r=Ft(t,0,0,0);e.spine=r;let o=B(Pt([[.19,-.24],[.165,-.1],[.13,.05],[.12,.16],[.09,.22],[.035,.25]],24),i,{thick:.007,side:ot});o.scale.z=.85,r.add(o);let c=B(new Gt(.035,.16),5592415,{outline:!1,side:ot});c.position.set(.07,-.16,.148),c.rotation.y=.35,r.add(c);let a=B(new ze(.045,.05,.04,16),i,{thick:.004});a.position.y=.26,r.add(a);let l=B(new Ge(.014,8,6),s,{thick:.003});l.position.set(.02,0,.135),r.add(l);for(let p of[-1,1]){let M=p<0?"l":"r",_=Ft(r,p*.12,.2,0),y=Zn(.036,.08,_n,.005,Mn);y.position.y=-.07,_.add(y);let S=Ft(_,0,-.13,0),v=Zn(.034,.06,_n,.005,Mn);v.position.y=-.05,S.add(v);let T=B(new Ge(.045,14,10),_n,{thick:.005,line:Mn});T.position.y=-.11,S.add(T);for(let P=-1;P<=1;P++){let b=B(new Lt(.006,.02,5),16777215,{thick:.002,line:10129295});b.position.set(P*.016,-.15,.02),b.rotation.x=Math.PI,S.add(b)}e[M+"Shoulder"]=_,e[M+"Elbow"]=S,e[M+"Hand"]=T}let h=new ae,f=B(new qn(.15,24,0,Math.PI),2959920,{outline:!1,side:ot});h.add(f);for(let p=0;p<=10;p++){let M=p/10*Math.PI,_=new me(new gt(.004,.15,.004),Df(6116704));_.position.set(Math.cos(M)*.075,Math.sin(M)*.075,.002),_.rotation.z=M-Math.PI/2,h.add(_)}let u=B(new $n(.1,.155,24,1,0,Math.PI),15214891,{outline:!1,side:ot});u.position.z=.004,h.add(u),h.position.set(-.03,.08,.16),h.rotation.set(-.15,0,.45),r.add(h),e.fan=h;let d=Ft(r,0,.26,0);e.neck=d;let m=cu({r:.25,face:Xa.fox,jaw:.35,hair:{scale:1.08,spikes:13,spikeDepth:.5,flare:.12,lengthKeys:[[0,1.45],[.5,1.52],[.78,1.7],[.95,3],[1.6,2.7],[Math.PI,2.6]]},hairColor:"#f1f4f7",streak:"#c3ccd8",tipColor:"rgba(205,218,232,0.5)",hairLine:10726586});m.head.position.y=.24,d.add(m.head),e.head=m.head;for(let p of[-1,1]){let M=new ae;M.position.set(p*.17,.22,-.02),M.rotation.set(-.1,0,-p*.6);let _=B(new Lt(.12,.3,4),15988216,{thick:.006,line:10134450});_.scale.z=.4,_.rotation.y=Math.PI/4,_.position.y=.15,M.add(_);let y=B(new Lt(.075,.2,4),13226718,{outline:!1});y.scale.z=.25,y.rotation.y=Math.PI/4,y.position.set(0,.12,.03),M.add(y),m.head.add(M),e[(p<0?"l":"r")+"Ear"]=M}let x=Ft(t,.03,-.1,-.12),g=B(kf(.6,.14,-.35),16054009,{thick:.007,line:10134450});return x.add(g),x.rotation.set(-1.25,0,-.9),e.tail=x,lu(n,e,[m],{standHeight:.33})}function $a(){let n=new ae,e={},t=Ft(n,0,0,0);e.pelvis=t;let i=16185074,s=4082812;for(let y of[-1,1]){let S=y<0?"l":"r",v=Ft(t,y*.065,-.05,0),T=Zn(.048,.2,_n,.006,Mn);T.position.y=-.13,v.add(T);let P=Ft(v,0,-.27,0),b=Zn(.04,.2,_n,.006,Mn);b.position.y=-.13,P.add(b);let E=B(Je(.09,.06,.16,.025),5917252,{thick:.005});E.position.set(0,-.29,.03),P.add(E),e[S+"Hip"]=v,e[S+"Knee"]=P}let r=B(nu(.12,.22,.24,16,.012,0),s,{thick:.006,side:ot});r.position.y=-.05,t.add(r),rp(t,e);let o=Ft(t,0,.06,0);e.spine=o;let c=B(Pt([[.11,0],[.12,.1],[.135,.2],[.13,.28],[.05,.32]],24),i,{thick:.007,line:10396589});c.scale.z=.74,o.add(c);let a=B(new ze(.1,.17,.08,24,1,!0),i,{thick:.006,line:10396589,side:ot});a.position.y=.28,a.scale.z=.8,o.add(a);let l=B(new Da(.035),15979371,{thick:.004});l.scale.set(1.6,.8,.5),l.position.set(0,.24,.1),o.add(l),o.add(op(.032,.046,.2,.39));for(let y of[-1,1]){let S=y<0?"l":"r",v=Ft(o,y*.15,.27,0),T=B(new ze(.05,.06,.12,14),i,{thick:.006,line:10396589});T.position.y=-.05,v.add(T);let P=Zn(.032,.13,_n,.005,Mn);P.position.y=-.1,v.add(P);let b=Ft(v,0,-.2,0),E=Zn(.028,.13,_n,.005,Mn);E.position.y=-.09,b.add(E);let N=B(new Ge(.036,12,10),_n,{thick:.005,line:Mn});N.scale.set(.8,1.1,.7),N.position.y=-.19,b.add(N),e[S+"Shoulder"]=v,e[S+"Elbow"]=b,e[S+"Hand"]=N}let h=new ae,f=B(Pt([[0,0],[.042,0],[.052,.15],[0,.15]],20),14857356,{thick:.004,line:10122582});h.add(f);for(let y=0;y<14;y++){let S=y*2.3,v=.015+y%4*.018,T=new me(new Ge(.011,8,6),wt(3876384));T.position.set(Math.cos(S)*.043,v,Math.sin(S)*.043),h.add(T)}let u=B(new ze(.054,.054,.008,20),16777215,{thick:.003,line:11580861});u.position.y=.152,h.add(u);let d=B(new ze(.008,.008,.2,8),14264713,{thick:.003});d.position.set(0,.2,0),d.rotation.x=-.1,h.add(d),h.position.set(.02,.2,.17),h.rotation.x=-.15,o.add(h),e.cup=h;let m=Ft(o,0,.37,0);e.neck=m;let x=cu({r:.19,face:Xa.boba,jaw:.85,hair:{scale:1.09,spikes:15,spikeDepth:.45,flare:.1,lengthKeys:[[0,1.45],[.5,1.55],[.75,1.7],[.95,2.9],[1.6,2.5],[Math.PI,2.4]]},hairColor:"#f6f2e4",streak:"#cfd7ea",tipColor:"rgba(170,196,240,0.8)",hairLine:11117722});x.head.position.y=.2,m.add(x.head),e.head=x.head;let g=B(Ga(.025,.16,{bendX:.06,flat:.4}),15985092,{thick:.004,line:11774348});g.rotation.z=Math.PI,g.position.set(0,.2,.02),x.head.add(g);let p=B(Ga(.07,.5,{bendZ:-.1,flat:.6}),12965362,{thick:.006,line:9215168});p.position.set(.17,.08,-.08),p.rotation.z=.15,x.head.add(p),e.ponytail=p;let M=new ae;for(let y=0;y<5;y++){let S=y/5*Math.PI*2,v=B(new Ge(.03,10,8),16234948,{thick:.003,line:13205645});v.scale.set(1,.6,.35),v.position.set(Math.cos(S)*.03,Math.sin(S)*.03,0),v.rotation.z=S,M.add(v)}let _=B(new Ge(.014,8,6),16176234,{thick:.002});return M.add(_),M.position.set(.17,.13,.05),M.rotation.y=1.1,x.head.add(M),lu(n,e,[x],{standHeight:.62})}var au=["pelvis","spine","neck","lShoulder","lElbow","rShoulder","rElbow","lHip","lKnee","rHip","rKnee"];function lu(n,e,t,i){for(let c of["plate","ponytail"])e[c]&&(e[c].userData.keepTree=!0);zf(n);let s={};for(let c of au)e[c]&&(s[c]=e[c].rotation.clone());let r={};return{root:n,J:e,heads:t,meta:i,pose:{},face:t[0].face,lookTgt:{x:0,y:0},lookCur:{x:0,y:0},wingScale:1,wingTarget:1,setWingStage(c,a=!1){if(!e.wingMat)return;let l=_s[Math.max(0,Math.min(_s.length-1,c))],h=e.wingMat.userData.wingUniforms;h.uRoot.value.set(l.root),h.uMid.value.set(l.mid),h.uTip.value.set(l.tip),e.wingMat.emissive.set(l.glow?5913104:0),this.wingTarget=1+Math.min(c,6)*.13,a||(this.wingScale=this.wingTarget)},lookAt(c,a){Number.isFinite(c)&&Number.isFinite(a)&&(this.lookTgt.x=Dt.clamp(c,-1,1),this.lookTgt.y=Dt.clamp(a,-1,1))},lookAtPoint(c){let a=this.J.neck.worldToLocal(c.clone()),l=Math.atan2(a.x,a.z),h=Math.atan2(-(a.y-.2),Math.hypot(a.x,a.z));if(a.z<-.2){this.lookAt(0,0);return}this.lookAt(l/1.1,h/.9)},setPose(c){this.pose=c||{}},snap(){for(let c of au){if(!e[c])continue;let a=this.pose[c]||[0,0,0];e[c].rotation.set(a[0],a[1],a[2])}},update(c,a,l={}){let h=1-Math.exp(-c*(l.poseSpeed??8));for(let u of au){if(!e[u])continue;let d=this.pose[u]||[0,0,0],m=e[u].rotation;m.x+=(d[0]-m.x)*h,m.y+=(d[1]-m.y)*h,m.z+=(d[2]-m.z)*h}for(let u of t){let d=l.wind||E1;u.windU.uWind.value.lerp(d,1-Math.exp(-c*4)),u.face.update(c,a)}let f=1-Math.exp(-c*6);if(this.lookCur.x+=(this.lookTgt.x-this.lookCur.x)*f,this.lookCur.y+=(this.lookTgt.y-this.lookCur.y)*f,e.head.rotation.y=this.lookCur.x*.45,e.head.rotation.x=this.lookCur.y*.3,t[0].face.look(this.lookTgt.x*1.4-this.lookCur.x*.6,this.lookTgt.y*1.2-this.lookCur.y*.4),e.wings&&(this.wingScale+=(this.wingTarget-this.wingScale)*(1-Math.exp(-c*1.5)),e.wings.scale.setScalar(this.wingScale)),e.lWing){let u=Math.sin(a*(l.wingRate??2.2))*(l.wingAmp??.12);e.lWing.rotation.set(0,.5+u,.2+u*.5),e.rWing.rotation.set(0,-.5-u,-.2-u*.5)}if(e.halo&&(e.halo.position.y=.25+Math.sin(a*2)*.012),e.tail&&(e.tail.rotation.y=Math.sin(a*2.2)*.25,e.tail.rotation.z=-.9+Math.sin(a*1.6)*.12),e.lEar){let u=Math.max(0,Math.sin(a*.9)-.94)*6;e.lEar.rotation.z=.6+u*.3}e.ponytail&&(e.ponytail.rotation.x=Math.sin(a*1.7)*.08)}}}var E1=new A,Ya={stand:{},hover:{pelvis:[.15,0,0],lShoulder:[.1,0,-.35],rShoulder:[.1,0,.35],lElbow:[-.3,0,0],rElbow:[-.3,0,0],lHip:[-.15,0,-.05],rHip:[.1,0,.05],lKnee:[.35,0,0],rKnee:[.2,0,0]},broom:{pelvis:[.05,0,0],lHip:[-1.35,0,-.08],rHip:[-1.25,0,.08],lKnee:[1.3,0,0],rKnee:[1.1,0,0],lShoulder:[-1,0,-.15],rShoulder:[-1,0,.15],lElbow:[-.6,0,0],rElbow:[-.6,0,0],spine:[.2,0,0]},glide:{pelvis:[1.25,0,0],neck:[-.9,0,0],lShoulder:[.3,0,-.45],rShoulder:[.3,0,.45],lElbow:[0,0,0],rElbow:[0,0,0],lHip:[.05,0,-.06],rHip:[.05,0,.06],lKnee:[.25,0,0],rKnee:[.5,0,0]},platform:{lShoulder:[-.7,0,-.1],lElbow:[-.8,0,0],rShoulder:[.05,0,.25],rElbow:[-.2,0,0],lKnee:[.08,0,0],rKnee:[.08,0,0]},umbrella:{rShoulder:[-.15,0,2.75],rElbow:[0,0,.1],lShoulder:[.1,0,-.3],lElbow:[-.4,0,0],lHip:[-.2,0,-.05],rHip:[.15,0,.05],lKnee:[.5,0,0],rKnee:[.25,0,0]},cycle:{pelvis:[.25,0,0],spine:[.25,0,0],neck:[-.4,0,0],lShoulder:[-1.1,0,-.1],rShoulder:[-1.1,0,.1],lElbow:[-.3,0,0],rElbow:[-.3,0,0],lHip:[-1.2,0,0],rHip:[-1.2,0,0],lKnee:[1.4,0,0],rKnee:[1.4,0,0]},cheek:{rShoulder:[-.4,0,.35],rElbow:[-2.3,.4,0],lShoulder:[.05,0,-.12],lElbow:[-.1,0,0]},foxFan:{rShoulder:[-.9,0,.5],rElbow:[-1.2,.6,0],lShoulder:[.1,0,-.8],lElbow:[-.2,0,0]},bobaDrink:{rShoulder:[-.5,0,.3],rElbow:[-2.15,.3,0],lShoulder:[0,0,-.1],lElbow:[-.1,0,0]}},sp=new A(0,-1,0);function b1(n,e,t,i=[.3,-1,-.6]){let s=e<0?"l":"r",r=n.J[s+"Shoulder"],o=n.J[s+"Elbow"],c=n.J[s+"Hand"],a=r.position.clone(),l=-o.position.y,h=-c.position.y,f=new A(...t).sub(a),u=Math.min(f.length(),(l+h)*.995);f.setLength(u);let d=a.clone().add(f),m=(l*l-h*h+u*u)/(2*u),x=Math.sqrt(Math.max(0,l*l-m*m)),g=f.clone().normalize(),p=new A(i[0]*e,i[1],i[2]);p.sub(g.clone().multiplyScalar(p.dot(g))).normalize();let M=a.clone().addScaledVector(g,m).addScaledVector(p,x),_=new zt().setFromUnitVectors(sp,M.clone().sub(a).normalize()),y=d.clone().sub(M).normalize().applyQuaternion(_.clone().invert()),S=new zt().setFromUnitVectors(sp,y),v=new vn().setFromQuaternion(_),T=new vn().setFromQuaternion(S);return{[s+"Shoulder"]:[v.x,v.y,v.z],[s+"Elbow"]:[T.x,T.y,T.z]}}function Kn(n,e,t=[]){let i={...e},s=e.spine||[0,0,0],r=new zt().setFromEuler(new vn(...s)).invert();for(let o of t){let c=o.at;o.space==="pelvis"&&(c=new A(...o.at).sub(n.J.spine.position).applyQuaternion(r).toArray()),Object.assign(i,b1(n,o.side,c,o.pole))}return i}function Zi(n,e){return n==="angel"?{cheek:Kn(e,{lShoulder:[.05,0,-.12],lElbow:[-.1,0,0]},[{side:1,at:[.12,.6,.12],pole:[1,-1,-.2]}])}:n==="fox"?{fan:Kn(e,{rShoulder:[.1,0,.8],rElbow:[-.25,0,0]},[{side:-1,at:[-.03,.06,.17],pole:[1,-1,.2]}])}:n==="boba"?{drink:Kn(e,{lShoulder:[.05,0,-.12],lElbow:[-.1,0,0]},[{side:1,at:[.035,.27,.17],pole:[1,-1,-.3]}])}:{}}function rp(n,e){let i=B(new Ge(.125,20,12,0,Math.PI*2,Math.PI*.35,Math.PI*.65),2895414,{thick:.004});i.scale.set(1,.75,.82),i.position.y=0,n.add(i);for(let s of["lHip","rHip"]){let r=B(new ze(.062,.058,.11,16),2895414,{thick:.004});r.position.y=-.06,e[s].add(r)}}function op(n,e,t,i){let s=new me(new ze(n,e,t,20,1,!0),wt(16047314));return s.position.set(0,i,-.01),s.scale.z=.92,s}var Za=[{key:"shell",hex:15856373,name:"霧面白",mat:"PC/ABS 霧面",from:"主角的銀白髮色",role:"外殼主體"},{key:"accent",hex:5205232,name:"制服鈷藍",mat:"噴漆＋透明保護層",from:"主角的 polo 制服",role:"辨識色、可動件"},{key:"metal",hex:15778632,name:"蜂蜜金",mat:"陽極處理鋁",from:"滴落光環、25 號鑰匙",role:"結構件、散熱件"},{key:"grip",hex:3817290,name:"石墨灰",mat:"TPE 軟膠＋止滑紋",from:"百褶裙",role:"所有手會碰到的地方"},{key:"safety",hex:14173247,name:"旗袍紅",mat:"高彩度 PP",from:"狐狸隊友的旗袍與扇子",role:"只用在緊急／安全件"}],Pe=Object.fromEntries(Za.map(n=>[n.key,n.hex])),Ka={name:"模組化飛行系統",lead:"一個背扣，六種飛行。共用介面，換裝不必重學。",rules:[{t:"同一個接口",d:"共用磁吸背扣，換裝 0.8 秒，學一次就會。"},{t:"狀態光環",d:"藍＝電量足、金＝剩一半、紅＝快沒電。"},{t:"紅色只留給安全",d:"只有緊急開關是紅色，一眼就找到。"},{t:"手碰的地方都是軟膠",d:"握把腳踏都是軟膠，摸到就知道能抓。"},{t:"顏色從角色身上來",d:"白髮、鈷藍制服、金光環、紅旗袍。"}]};function pr(n,e=.008){let t=new me(new st(n,e,8,36),Ct(8368895,1.2));return t.userData.statusRing=!0,t}function ap(){let n=new ae,e=B(new st(.022,.006,8,20),Pe.safety,{thick:.003});e.position.y=-.04,n.add(e);let t=B(new gt(.012,.035,.006),Pe.safety,{thick:.002});return t.position.y=-.012,n.add(t),n}function cp(n=.055){let e=new ae,t=B(new ze(n,n,.018,28),Pe.metal,{thick:.004});t.rotation.x=Math.PI/2,e.add(t);for(let i=0;i<4;i++){let s=i/4*Math.PI*2+Math.PI/4,r=new me(new ze(.007,.007,.022,10),wt(9071132));r.rotation.x=Math.PI/2,r.position.set(Math.cos(s)*n*.6,Math.sin(s)*n*.6,0),e.add(r)}return e}function Ja(n,e=.02){let t=new ae,i=B(new bi(e,n,4,12),Pe.grip,{thick:.003});t.add(i);for(let s=-2;s<=2;s++){let r=new me(new st(e*1.02,e*.18,6,16),wt(2764342));r.rotation.x=Math.PI/2,r.position.y=s/2*n*.4,t.add(r)}return t}function Jt(n,e,t,i,s=.004){let r=new A(...n),o=new A(...e),c=r.distanceTo(o),a=B(new ze(t,t,c,12),i,{thick:s});return a.position.copy(r).add(o).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new A(0,1,0),o.clone().sub(r).normalize()),a}function lp(n,e,t=6){let i=new ae,s=B(new ze(n,n*.92,e,32,1,!0),Pe.shell,{thick:.005,side:ot});i.add(s);let r=B(new st(n,e*.14,8,32),Pe.accent,{thick:.004});r.rotation.x=Math.PI/2,r.position.y=e/2,i.add(r);let o=new ae,c=B(new ze(n*.22,n*.18,e*.7,16),Pe.metal,{thick:.003});o.add(c);for(let h=0;h<t;h++){let f=new me(new gt(n*.72,e*.06,n*.22),wt(14277859));f.position.x=n*.5,f.rotation.x=.5;let u=new ae;u.rotation.y=h/t*Math.PI*2,u.add(f),o.add(u)}i.add(o);let a=new ae,l=B(new st(n*.6,.004,6,28),Pe.grip,{outline:!1});l.rotation.x=Math.PI/2,a.add(l);for(let h=0;h<2;h++){let f=new me(new gt(n*1.9,.006,.006),wt(Pe.grip));f.rotation.y=h*Math.PI/2,a.add(f)}return a.position.y=-e/2,i.add(a),{group:i,rotor:o,grille:a,duct:s}}function rt(n,e,t,i,s,r){return n.add(t),e.push({obj:t,label:i,note:r,explode:new A(...s),home:t.position.clone()}),t}function S1(){let n=new ae,e=[],t=B(Je(.34,.42,.17,.06),Pe.shell,{thick:.007});t.position.set(0,-.04,-.1),rt(n,e,t,"書包本體（18L）",[0,0,-.05],"保留書包原本的容量");let i=B(Je(.33,.24,.04,.03),Pe.accent,{thick:.005});i.position.set(0,.06,-.19),rt(n,e,i,"前蓋（快拆）",[0,.12,-.22]);let s=pr(.045);s.position.set(0,.07,-.212),rt(n,e,s,"狀態光環",[0,.22,-.4],"藍／金／紅三色顯示電量");let r=[],o=[];for(let l of[-1,1]){let h=lp(.085,.09);h.group.position.set(l*.235,-.2,-.1),rt(n,e,h.group,l<0?"涵道風扇 L":"涵道風扇 R",[l*.28,-.12,0],"葉片包在風道裡，手指捲不進去"),r.push(h.rotor);let f=new ae;f.position.y=-.05;for(let[p,M,_,y]of[[.07,.42,5223679,.6],[.038,.26,16777215,.95]]){let S=[];for(let b=0;b<=8;b++){let E=b/8;S.push(new fe(p*(1+.25*Math.sin(E*Math.PI))*Math.pow(1-E,.7)+.001,-E*M))}let v=new qi(S,16),T=v.attributes.position,P=new Float32Array(T.count*4);for(let b=0;b<T.count;b++)P.set([1,1,1,1+T.getY(b)/M],b*4);v.setAttribute("color",new Rt(P,4)),f.add(new me(v,new We({color:_,vertexColors:!0,transparent:!0,opacity:y,depthWrite:!1,side:ot})))}let u=sn(10474751,.32);u.position.y=-.03,f.add(u);let d=[];for(let p=0;p<4;p++){let M=sn(14676735,.1);M.material.blending=Vi,f.add(M),d.push(M)}f.userData.puffs=d,f.visible=!1,h.group.add(f),o.push(f);let m=Jt([l*.17,-.2,-.1],[l*.15,-.2,-.1],.02,Pe.metal),x=Jt([l*.16,-.12,-.1],[l*.235,-.17,-.1],.016,Pe.metal),g=new ae;g.add(m,x),rt(n,e,g,"鋁合金支架",[l*.14,-.05,0])}let c=cp();c.position.set(0,0,-.005),rt(n,e,c,"磁吸背扣（共用接口）",[0,0,.25],"六個模組共用同一個接口");let a=ap();return a.position.set(.19,.12,-.04),rt(n,e,a,"緊急拉環",[.18,.18,.1],"一拉即脫離背扣"),{root:n,parts:e,anim(l,h){for(let f of r)f.rotation.y+=(8+h.thrust*40)*h.dt;o.forEach((f,u)=>{if(f.visible=!!h.exhaust,!f.visible)return;let d=.45+h.thrust*.55+(h.boost?.6:0)+(h.climb?.25:0),m=1+Math.sin(l*47+u*2)*.08+Math.sin(l*83+u)*.06;f.scale.set(1,d*m,1),f.children[2].scale.setScalar(.32*(.8+d*.3)*m),f.userData.puffs.forEach((x,g)=>{let p=(l*(1.6+h.thrust*1.4)+g/4+u*.13)%1;x.position.y=-.12-p*.55,x.position.x=Math.sin(g*2.3+u)*.02*p,x.scale.setScalar(.07+p*.16),x.material.opacity=(1-p)*.7})})}}}function w1(){let n=new ae,e=[],t=new ae,i=B(new ze(.026,.026,1.4,16),Pe.shell,{thick:.005});i.rotation.x=Math.PI/2,i.position.z=.05,t.add(i);for(let g of[.6,.28,-.25]){let p=B(new ze(.032,.032,.03,16),Pe.metal,{thick:.003});p.rotation.x=Math.PI/2,p.position.z=g,t.add(p)}rt(n,e,t,"碳纖維主軸",[0,-.12,0]);let s=new ae;s.add(Jt([0,0,.42],[0,.17,.44],.018,Pe.metal)),s.add(Jt([-.17,.17,.44],[.17,.17,.44],.016,Pe.metal));for(let g of[-1,1]){let p=Ja(.07,.022);p.rotation.z=Math.PI/2,p.position.set(g*.15,.17,.44),s.add(p)}rt(n,e,s,"T 型握把（軟膠止滑）",[0,.18,.12],"手、臀、腳三點固定");let r=pr(.035,.006);r.position.set(0,.17,.465),rt(n,e,r,"狀態光環",[0,.32,.25]);let o=new ae,c=B(new ze(.018,.018,.03,14),Pe.safety,{thick:.003});c.position.set(0,.2,.44),o.add(c);let a=B(new st(.03,.004,6,18,Math.PI*1.5),Pe.safety,{thick:.002});a.position.set(.04,.2,.42),a.rotation.y=Math.PI/2,o.add(a),rt(n,e,o,"防脫繩緊急開關",[.2,.3,.1],"人離開掃把，引擎自動斷電");let l=B(Je(.17,.05,.28,.024),Pe.accent,{thick:.004});l.position.set(0,.045,0),rt(n,e,l,"滑軌座墊（可前後調）",[0,.2,0],"配合不同身高");for(let g of[-1,1]){let p=Jt([0,-.02,.25],[g*.14,-.08,.27],.012,Pe.metal),M=B(Je(.06,.016,.05,.007),Pe.grip,{thick:.002});M.position.set(g*.15,-.085,.27);let _=new ae;_.add(p,M),rt(n,e,_,g<0?"腳踏桿 L":"腳踏桿 R",[g*.18,-.12,0])}let h=new ae,f=B(Pt([[.03,0],[.09,.03],[.1,.12],[.095,.3],[.07,.36]],28),Pe.shell,{thick:.005});f.rotation.x=-Math.PI/2,h.add(f);let u=B(new st(.1,.012,8,28),Pe.accent,{thick:.003});u.position.z=-.14,h.add(u);let d=new me(new qn(.06,20),new We({color:2764602}));d.position.z=-.361,d.rotation.y=Math.PI,h.add(d);let m=new me(new Lt(.05,.3,14,1,!0),new We({color:10473727,transparent:!0,opacity:.7,blending:yn,depthWrite:!1}));m.rotation.x=Math.PI/2,m.position.z=-.52,h.add(m),h.position.z=-.62,rt(n,e,h,"尾部渦輪推進器",[0,0,-.35]);let x=new ae;for(let g=0;g<14;g++){let p=g/14*Math.PI*2,M=B(Je(.012,.05,.3,.005),Pe.metal,{thick:.002});M.position.set(Math.cos(p)*.115,Math.sin(p)*.115,-.05),M.rotation.z=p+Math.PI/2,M.rotation.x=0;let _=new ae;_.add(M),_.rotation.set(Math.sin(p)*.16,-Math.cos(p)*.16,0),x.add(_)}return x.position.z=-.85,rt(n,e,x,"刷毛造型散熱鰭片",[0,0,-.6],"保留掃把的輪廓，讓人一眼看懂（產品語意）"),{root:n,parts:e,anim(g,p){m.scale.set(1,.4+p.thrust*1.4+(p.boost?1.2:0),1),m.material.opacity=.35+p.thrust*.4,x.rotation.z+=p.dt*(.5+p.thrust*2)}}}function T1(){let n=new ae,e=[],t=B(new ze(.12,.12,.09,32),Pe.shell,{thick:.006});t.rotation.x=Math.PI/2,t.position.z=-.07,rt(n,e,t,"齒輪箱外殼",[0,0,-.05]);let i=pr(.12,.007);i.position.z=-.117,rt(n,e,i,"狀態光環",[0,0,-.4]);let s=new ae,r=B(new ze(.07,.07,.02,24),Pe.metal,{thick:.003});r.rotation.x=Math.PI/2,s.add(r);for(let f=0;f<16;f++){let u=new me(new gt(.018,.022,.02),wt(Pe.metal)),d=f/16*Math.PI*2;u.position.set(Math.cos(d)*.078,Math.sin(d)*.078,0),u.rotation.z=d,s.add(u)}s.position.z=-.125,rt(n,e,s,"主發條齒輪",[0,0,-.3]);let o=new ae;o.add(Jt([0,0,-.13],[0,0,-.24],.012,Pe.metal));let c=B(new st(.05,.014,8,24),Pe.metal,{thick:.003});c.position.z=-.27,c.rotation.y=Math.PI/2,o.add(c);for(let f of[-1,1]){let u=B(new st(.03,.012,8,20),Pe.metal,{thick:.003});u.position.set(0,f*.055,-.27),u.rotation.y=Math.PI/2,o.add(u)}rt(n,e,o,"25 號上鍊鑰匙",[0,0,-.45],"零電池：轉鑰匙就能補能");let a=cp();a.position.z=-.01,rt(n,e,a,"磁吸背扣（共用接口）",[0,0,.25]);let l=ap();l.position.set(0,-.13,-.07),rt(n,e,l,"緊急拉環",[0,-.2,0]);let h=[];for(let f of[-1,1]){let u=new ae;u.position.set(f*.1,.03,-.08);let d=[],m=u,x=[.38,.34,.3];for(let g=0;g<3;g++){let p=new ae;g>0&&(p.position.x=f*x[g-1]);let M=Jt([0,0,0],[f*x[g],0,0],.016-g*.003,Pe.metal,.003);p.add(M);let _=B(new Ge(.024-g*.003,12,8),Pe.accent,{thick:.003});p.add(_);let y=3;for(let S=0;S<y;S++){let v=.36+g*.05-S*.04,T=new ae,P=B(Je(.075,v,.012,.03),Pe.shell,{thick:.003});P.position.y=-v/2,T.add(P);let b=B(Je(.076,.07,.014,.03),Pe.accent,{thick:.003});b.position.y=-v+.03,T.add(b),T.position.x=f*(x[g]*(S+.6)/y),T.rotation.z=f*(.15+g*.25+S*.08),p.add(T)}m.add(p),d.push(p),m=p}rt(n,e,u,f<0?"三段摺疊翼 L":"三段摺疊翼 R",[f*.25,.05,0],"收起寬 58 cm，進得了教室門"),h.push({s:f,segs:d})}return{root:n,parts:e,fold:0,phase:0,beat:!1,anim(f,u){let d=u.folded?1:0;this.fold+=(d-this.fold)*Math.min(1,u.dt*4);let m=u.airborne&&!u.folded,x=m?1.6+u.thrust*2.2+(u.climb?1.4:0)+(u.flap?2.5:0):.25,g=m?.32+u.thrust*.18+(u.flap?.3:0):.03,p=Math.sin(this.phase);this.phase+=u.dt*x*Math.PI*2;let M=Math.sin(this.phase)*g;this.beat=m&&p>0&&Math.sin(this.phase)<=0;for(let _ of h){let y=this.fold;_.segs[0].rotation.set(0,-_.s*y*.3,_.s*(.25+M-y*1.25)),_.segs[1].rotation.set(0,0,_.s*(y*2.4-M*.4)),_.segs[2].rotation.set(0,0,-_.s*(y*2.2))}s.rotation.z+=u.dt*(.3+u.thrust),o.rotation.z-=u.dt*(.2+(u.flap||0)*6+(m?1.5:0))}}}var Ki;function A1(){return Ki||(Ki=new Vt({transparent:!0,depthWrite:!1,side:ot,uniforms:{uTime:{value:0},uPulse:{value:0}},vertexShader:`
      varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position,1.0);
        vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); vP = position;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uTime; uniform float uPulse;
      varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main(){
        float f = pow(1.0 - abs(dot(vN, vV)), 2.2);
        float h = fract(f * 1.6 + vP.y * 0.6 + uTime * 0.05);
        vec3 iri = 0.5 + 0.5 * cos(6.2831 * (h + vec3(0.0, 0.33, 0.67)));
        vec3 col = mix(vec3(0.85,0.93,1.0), iri, 0.45);
        float a = f * 0.75 + 0.06 + uPulse * 0.35;
        gl_FragColor = vec4(col + uPulse*0.3, a);
      }`}),Ki)}function R1(){let n=new ae,e=[],t=B(Pt([[0,.03],[.3,.03],[.32,0],[.3,-.035],[.12,-.06],[0,-.06]],40),Pe.shell,{thick:.006});rt(n,e,t,"64 cm 站立平台",[0,-.05,0],"不用平衡感也站得穩");let i=B(new st(.315,.018,8,40),Pe.accent,{thick:.004});i.rotation.x=Math.PI/2,rt(n,e,i,"防撞緩衝環",[0,.06,0]);let s=B(new ze(.24,.24,.008,36),Pe.grip,{outline:!1});s.position.y=.034,rt(n,e,s,"止滑腳踏墊",[0,.18,0]);let r=new ae;for(let d=0;d<6;d++){let m=d/6*Math.PI*2,x=B(new ze(.03,.022,.06,14),Pe.metal,{thick:.003});x.position.set(Math.cos(m)*.2,-.08,Math.sin(m)*.2),r.add(x)}rt(n,e,r,"泡泡氣墊噴嘴 ×6",[0,-.22,0]);let o=new ae;o.add(Jt([0,.03,.2],[0,.82,.24],.016,Pe.metal));let c=Ja(.08,.026);c.position.set(0,.86,.24),o.add(c);let a=pr(.03,.006);a.rotation.x=Math.PI/2,a.position.set(0,.8,.24),o.add(a);let l=B(new Ge(.018,12,8),Pe.safety,{thick:.003});l.position.set(0,.92,.24),o.add(l),rt(n,e,o,"單桿操縱器",[0,.1,.3],"只有一根桿子：推哪裡就飛哪裡");let h=new me(new Ge(1,40,24),A1());h.position.y=.85,h.scale.set(.95,1.05,.95),h.renderOrder=5,rt(n,e,h,"全包覆氣泡罩",[0,.6,0],"被撞到先破泡泡，不是人受傷");let f=[],u=new We({color:14676223,transparent:!0,opacity:.6,depthWrite:!1});for(let d=0;d<12;d++){let m=new me(new Ge(.02+d%3*.012,10,8),u);n.add(m),f.push({b:m,ph:d*.73,a:d/12*Math.PI*2})}return{root:n,parts:e,anim(d,m){Ki.uniforms.uTime.value=d,Ki.uniforms.uPulse.value=Math.max(0,Ki.uniforms.uPulse.value-m.dt*1.5),m.pulse&&(Ki.uniforms.uPulse.value=1),h.visible=!m.hideShield;for(let x of f){let g=(d*.6+x.ph)%1;x.b.position.set(Math.cos(x.a+d*.3)*.2,-.1-g*.6,Math.sin(x.a+d*.3)*.2),x.b.visible=!m.hideShield}}}}function C1(){let n=new ae,e=[],t=new ae,i=[[0,.2],[.18,.18],[.36,.12],[.52,.03],[.6,-.05]];for(let u=0;u<8;u++){let d=B(new qi(i.map(([m,x])=>new fe(m,x)),6,u/8*Math.PI*2,Math.PI/4),u%2?Pe.shell:Pe.accent,{thick:.005,side:ot});t.add(d)}for(let u=0;u<8;u++){let d=u/8*Math.PI*2;t.add(Jt([0,.19,0],[Math.sin(d)*.6,-.05,Math.cos(d)*.6],.006,Pe.metal,.002))}t.position.y=.62,rt(n,e,t,"傘面（兼降落傘）",[0,.18,0],"動力失效時自然撐開緩降");let s=Jt([0,0,0],[0,1,0],.014,Pe.shell);rt(n,e,s,"中軸",[0,0,0]);let r=[],o=new ae;for(let[u,d]of[[.94,1],[1.02,-1]]){let m=new ae;m.position.y=u;let x=B(new ze(.035,.035,.03,14),Pe.metal,{thick:.003});m.add(x);for(let g=0;g<2;g++){let p=B(Je(.62,.008,.06,.004),Pe.shell,{thick:.003});p.rotation.y=g*Math.PI,p.position.x=0;let M=new ae;M.rotation.y=g*Math.PI,p.position.x=.32,p.rotation.set(d*.12,0,0),M.add(p);let _=B(Je(.06,.01,.062,.004),Pe.accent,{thick:.002});_.position.x=.6,M.add(_),m.add(M)}o.add(m),r.push({r:m,dir:d})}rt(n,e,o,"同軸反轉旋翼",[0,.35,0],"上下反方向轉，扭力互相抵銷，人不會跟著自轉");let c=pr(.03,.006);c.rotation.x=Math.PI/2,c.position.y=.86,rt(n,e,c,"狀態光環",[.25,.3,0]);let a=new ae,l=B(new st(.05,.02,8,18,Math.PI),Pe.grip,{thick:.003});l.position.set(.05,-.02,0),l.rotation.z=Math.PI,a.add(l);let h=Ja(.1,.022);h.position.y=.08,a.add(h);let f=B(Je(.012,.04,.02,.005),Pe.safety,{thick:.002});return f.position.set(0,.09,.03),a.add(f),rt(n,e,a,"J 型握把＋升降扳機",[0,-.2,.1],"單手操作，另一隻手可以拿東西"),{root:n,parts:e,anim(u,d){for(let{r:m,dir:x}of r)m.rotation.y+=x*d.dt*(d.closed?2:14+d.thrust*20);t.scale.set(d.closed?.35:1,d.closed?1.4:1,d.closed?.35:1)}}}function P1(){let n=new ae,e=[],t=new ae,i={seat:[0,0,0],crank:[0,-.42,.12],head:[0,.05,.55],rearHub:[0,-.3,-.5],frontHub:[0,-.3,.75],rear2:[0,-.02,-.38]};t.add(Jt(i.seat,i.crank,.02,Pe.metal)),t.add(Jt(i.crank,i.head,.022,Pe.metal)),t.add(Jt(i.seat,i.head,.018,Pe.metal)),t.add(Jt(i.crank,i.rearHub,.016,Pe.metal)),t.add(Jt(i.seat,i.rearHub,.016,Pe.metal)),t.add(Jt(i.head,i.frontHub,.02,Pe.metal)),t.add(Jt(i.seat,i.rear2,.016,Pe.metal)),rt(n,e,t,"鋁合金車架",[0,0,0]);let s=B(Je(.15,.045,.24,.02),Pe.accent,{thick:.004});s.position.set(0,.03,-.02),rt(n,e,s,"主座墊",[0,.18,0]);let r=B(Je(.2,.04,.18,.02),Pe.accent,{thick:.004});r.position.set(0,0,-.4),rt(n,e,r,"後座（狐狸專用）",[0,.18,-.15],"可以載朋友");let o=new ae;o.add(Jt([0,.05,.55],[0,.22,.5],.016,Pe.metal)),o.add(Jt([-.2,.22,.5],[.2,.22,.5],.014,Pe.metal));for(let m of[-1,1]){let x=Ja(.07,.02);x.rotation.z=Math.PI/2,x.position.set(m*.19,.22,.5),o.add(x)}let c=B(Je(.08,.012,.02,.005),Pe.safety,{thick:.002});c.position.set(.18,.21,.54),o.add(c);let a=pr(.03,.006);a.position.set(0,.23,.52),o.add(a),rt(n,e,o,"把手＋紅色煞車",[0,.2,.12]);let l=[];for(let[m,x,g]of[[.75,-.3,"前輪旋翼"],[-.5,-.3,"後輪旋翼"]]){let p=new ae;p.position.set(0,x,m);let M=new ae,_=lp(.26,.07,5);_.group.rotation.z=Math.PI/2,M.add(_.group);let y=B(new st(.27,.025,10,36),Pe.grip,{thick:.003});y.rotation.y=Math.PI/2,M.add(y);let S=new ae;S.add(M),p.add(S),rt(n,e,p,g,[0,-.15,m>0?.25:-.25],"起飛翻 90° 變升力風扇，還能擺頭調整推力方向"),l.push({tilt:S,flip:M,rotor:_.rotor})}let h=new ae;h.position.set(...i.crank);let f=B(new st(.09,.01,8,28),Pe.metal,{thick:.003});f.rotation.y=Math.PI/2,h.add(f);let u=[];for(let m of[-1,1]){let x=new ae;x.position.x=m*.07;let g=B(Je(.016,.16,.03,.007),Pe.metal,{thick:.002});g.position.y=-.07,x.add(g);let p=B(Je(.08,.02,.06,.008),Pe.grip,{thick:.002});p.position.set(m*.04,-.15,0),x.add(p),x.rotation.x=m>0?0:Math.PI,h.add(x),u.push({pedal:p,off:x.rotation.x})}rt(n,e,h,"踩踏發電曲柄",[0,-.18,0],"沒電也能慢慢踩回家");let d=new ae;for(let m of[-1,1]){let x=B(Je(.5,.012,.16,.05),Pe.shell,{thick:.003});x.position.set(m*.3,-.05,-.1),x.rotation.z=m*.12,d.add(x);let g=B(Je(.06,.014,.17,.02),Pe.accent,{thick:.002});g.position.set(m*.55,-.02,-.1),g.rotation.z=m*.12,d.add(g)}return rt(n,e,d,"滑翔側翼",[0,.05,0],"踩累了可以滑行休息"),{root:n,parts:e,crankAngle:0,anim(m,x){this.crankAngle+=x.dt*(x.pedal?9:1.2),h.rotation.x=this.crankAngle,u.forEach(y=>y.pedal.rotation.x=-this.crankAngle-y.off);let g=x.airborne?1:0,p=g?Math.min(1,x.thrust)*.55-(x.climb?.35:0):0,M=g?(x.turn||0)*.35:0;x.demo&&g&&(p=.3+Math.sin(m*.9)*.3,M=Math.sin(m*.55)*.3);let _=Math.min(1,x.dt*4);l.forEach((y,S)=>{y.flip.rotation.z+=((g?-Math.PI/2:0)-y.flip.rotation.z)*Math.min(1,x.dt*3),y.tilt.rotation.x+=(Math.max(0,p)-y.tilt.rotation.x)*_,y.tilt.rotation.z+=((S?-M:M)-y.tilt.rotation.z)*_,y.rotor.rotation.y+=x.dt*(g?18+x.thrust*20:3)})}}}var Ye=[{id:"backpack",code:"AM-01",name:"噴射書包",en:"DAYPACK JET",build:S1,tagline:"上學背的書包，放學就能起飛。",context:"要帶課本通勤，又想隨時起飛的高中生。",pain:"飛行背包太重、葉片外露，還得找空地起飛。",decisions:[["涵道風扇","葉片包在風道裡，手和頭髮捲不進去。"],["重心貼背","推進器放在腰側，起飛不會往後翻。"],["保留 18L 容量","能飛，也還是一個好用的書包。"],["雙推進器差速轉向","不用尾翼，原地就能轉身。"]],specs:{重量:"3.2 kg",續航:"25 分鐘",極速:"100 km/h",上手難度:"★☆☆"},controls:"W 前進・空白鍵上升・C 下降・Shift 加速・F 短衝刺",special:"短衝刺",attach:"mount",pose:"hover",hideOwnWings:!0,flight:{hover:!0,maxSpeed:26,accel:2.6,coast:2,climb:10,special:"dash",cost:25,regen:14}},{id:"broom",code:"AM-02",name:"渦輪掃把",en:"SWEEP TURBO",build:w1,tagline:"保留掃把的樣子，換掉掃把的心臟。",context:"趕時間、要穿越障礙的速度型使用者。",pain:"高速時手腳不知道放哪，很容易滑脫。",decisions:[["產品語意：刷毛＝散熱片","一眼認得出掃把，刷毛其實在散熱。"],["手、臀、腳三點固定","握把＋座墊＋腳踏，像騎機車一樣穩。"],["防脫繩緊急開關","人一離開掃把，引擎就自動斷電。"],["可滑動座墊","前後可調，不同身高都坐得舒服。"]],specs:{重量:"4.8 kg",續航:"15 分鐘",極速:"160 km/h",上手難度:"★★★"},controls:"W 加速・滑鼠轉向・需要速度才飛得住・按住 F 渦輪加力",special:"渦輪加力",attach:"pelvis",offset:[0,-.16,-.02],pose:"broom",hands:[{side:-1,at:[-.15,.01,.42],pole:[1,-.3,-1]},{side:1,at:[.15,.01,.42],pole:[1,-.3,-1]}],flight:{hover:!1,maxSpeed:44,accel:1.4,coast:.25,climb:12,liftSpeed:14,gravity:9,steer:2.2,special:"boost",cost:30,regen:10}},{id:"wings",code:"AM-03",name:"發條羽翼",en:"CLOCKWORK WINGS",build:T1,tagline:"不用插電，轉幾圈鑰匙就能滑翔。",context:"喜歡安靜滑翔、不想帶充電器的人。",pain:"電池又重又要充電，大翅膀還進不了門。",decisions:[["發條儲能","用 25 號鑰匙上鍊，不需要電池。"],["三段摺疊翼骨","收起寬 58 cm，走得進教室門。"],["羽片模組化","壞一片換一片，不用整組報廢。"],["滑翔回捲","下降時把位能存回發條裡。"]],specs:{重量:"2.1 kg",續航:"滑翔無限／拍翼 8 次",極速:"120 km/h",上手難度:"★★☆"},controls:"W 前傾滑翔・低頭俯衝加速・F 拍翼爬升（滑翔時回捲）",special:"拍翼",attach:"mount",pose:"glide",hideOwnWings:!0,flight:{hover:!1,maxSpeed:34,accel:.9,coast:.1,climb:6,liftSpeed:9,gravity:4.5,steer:1.6,dive:1,special:"flap",cost:13,regen:6}},{id:"bubble",code:"AM-04",name:"泡泡浮游器",en:"BUBBLE HOVER",build:R1,tagline:"第一次飛也不會怕的透明安全艙。",context:"新手、怕高，或要停在空中做事的人。",pain:"新手最怕兩件事：失控和掉下去。",decisions:[["全包覆氣泡罩","防風防雨防墜，撞到先破泡泡。"],["只有一根操縱桿","推哪就飛哪，元件越少學越快。"],["放手就停","手一放開就自動懸停。"],["平台加大到 64 cm","雙腳站穩，不需要平衡感。"]],specs:{重量:"5.5 kg",續航:"40 分鐘",極速:"55 km/h",上手難度:"☆☆☆"},controls:"W 前進・放手自動懸停・F 急停＋護盾脈衝",special:"急停護盾",attach:"pelvis",offset:[0,-.93,0],pose:"platform",hands:[{side:-1,at:[-.04,-.05,.25],pole:[1,-1,-.4]},{side:1,at:[.04,-.05,.25],pole:[1,-1,-.4]}],flight:{hover:!0,maxSpeed:15,accel:4,coast:6,climb:6,special:"brake",cost:20,regen:18}},{id:"umbrella",code:"AM-05",name:"螺旋槳雨傘",en:"PROPELLA",build:C1,tagline:"下雨天是雨傘，起風天是直升機。",context:"雨天上學，或要穿過強風的人。",pain:"飛行器怕雨又怕亂流，還得多帶一樣。",decisions:[["同軸反轉旋翼","上下反轉抵銷扭力，人不會跟著轉。"],["一物兩用","收起旋翼就是一把普通雨傘。"],["傘面兼降落傘","沒動力時，傘面自然撐開緩降。"],["J 型握把＋扳機","單手控制升降，另一手能拿東西。"]],specs:{重量:"1.6 kg",續航:"30 分鐘",極速:"45 km/h",上手難度:"★★☆"},controls:"W 前進・會慢慢下降・上升氣流特別強・按住 F 收傘急降",special:"收傘急降",attach:"spine",offset:[.12,.84,.02],pose:"umbrella",hands:[{side:1,at:[.12,.86,.02],pole:[1,0,-1],space:"spine"}],flight:{hover:!0,sink:1.8,maxSpeed:12,accel:2,coast:1.5,climb:8,updraft:3,special:"drop",cost:0,regen:12}},{id:"cycle",code:"AM-06",name:"天空腳踏車",en:"SKY CYCLE",build:P1,tagline:"地上騎、天上飛，用的是同一雙腳。",context:"想運動、想載朋友，沒電也想回家的人。",pain:"純電的沒電就停擺，而且只能坐一人。",decisions:[["輪轂即旋翼","車輪翻轉 90° 變旋翼，一件兩用。"],["可擺頭的推力方向","旋翼前後傾轉加速、左右側傾轉彎，像電風扇擺頭。"],["人力＋電力混合","踩踏時充電，停踩由電池平飛，沒電才要再踩。"],["雙人座","後座載狐狸隊友，重心在兩輪間。"],["滑翔側翼","踩累了可以滑行休息。"]],specs:{重量:"9.0 kg",續航:"踩多久飛多久",極速:"70 km/h",上手難度:"★☆☆"},controls:"按住 W 踩踏充電・放開 W 電池自動平飛・F 衝刺踩踏",special:"衝刺踩踏",attach:"pelvis",offset:[0,-.08,-.02],pose:"cycle",hands:[{side:-1,at:[-.19,.14,.48],pole:[1,-.5,-1]},{side:1,at:[.19,.14,.48],pole:[1,-.5,-1]}],flight:{hover:!1,maxSpeed:22,accel:1.6,coast:.4,climb:7,liftSpeed:6,gravity:5,steer:2.6,special:"sprint",cost:22,regen:0,pedalRegen:9,battery:{speed:.6,drain:8}}}],hu=[new Ie(14173247),new Ie(15778632),new Ie(8368895)];function mo(n,e){let t=e>.6?hu[2]:e>.25?hu[1]:hu[0];n.traverse(i=>{i.userData.statusRing&&i.material.color.copy(t).multiplyScalar(1.25)})}function go(n,e,t){let i=n.J;(e.attach==="mount"?i.mount:e.attach==="spine"?i.spine:i.pelvis).add(t.root),t.root.position.set(...e.offset||[0,0,0]),i.wings&&(i.wings.visible=!e.hideOwnWings),i.plate&&(i.plate.visible=e.attach!=="mount");let r=(e.hands||[]).map(o=>({space:"pelvis",...o}));return Kn(n,Ya[e.pose]||{},r)}function hp(n,e){e.root.parent?.remove(e.root)}function uu(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new An(i);return s.colorSpace=qt,s}function du(n,e,t){let i=new ae;i.add(B(new Ge(n,16,12),16777215,{thick:n*.12,line:2894389}));let s=new me(new Ge(n*.62,14,10),t?Ct(e,1.1):wt(e));s.position.z=n*.5,i.add(s);let r=new me(new Ge(n*.32,12,8),new We({color:1381148}));r.position.z=n*.85,i.add(r);let o=new me(new Ge(n*.16,8,6),new We({color:16777215}));return o.position.set(-n*.25,n*.28,n*.98),i.add(o),i.userData.iris=s,i}function ja(){let n=new ae,e=8016438,t=4862498,i=16184558,s=15906352,r=B(Pt([[.01,-3.4],[.6,-3],[1.25,-1.6],[1.6,.2],[1.45,1.6],[1,2.5],[.01,2.9]],22),e,{thick:.08});r.rotation.x=Math.PI/2,r.scale.set(1,1,.85),n.add(r);let o=new ae;o.position.set(0,.55,2.9),n.add(o);let c=B(new Ge(1.05,20,14),i,{thick:.07,line:10131084});c.scale.set(.95,.95,1.15),o.add(c);let a=B(new Ge(1.2,18,12),i,{thick:.07,line:10131084});a.position.set(0,-.35,-.8),a.scale.set(1,.85,1),o.add(a);let l=B(new Lt(.42,1.3,12),s,{thick:.05,line:10119696});l.rotation.x=Math.PI/2,l.position.set(0,-.05,1.45),o.add(l);let h=B(new st(.28,.13,8,12,Math.PI*.9),s,{thick:.04,line:10119696});h.rotation.set(0,Math.PI/2,Math.PI*1.05),h.position.set(0,-.3,1.95),o.add(h);let f=[];for(let x of[-1,1]){let g=du(.27,16756768,!0);g.position.set(x*.58,.28,.75),g.rotation.y=x*.5,o.add(g),f.push(g.userData.iris);let p=B(Je(.6,.14,.3,.05),14999506,{thick:.03,line:7038556});p.position.set(x*.55,.6,.8),p.rotation.z=x*.35,o.add(p)}let u=[];for(let x of[-1,1]){let g=new ae;g.position.set(x*1.2,.5,.6);let p=B(Je(5.6,.45,2.3,.4),e,{thick:.07});p.position.set(x*2.7,0,0),g.add(p);for(let M=0;M<7;M++){let _=B(Je(.7,.14,2.6-M*.05,.3),t,{thick:.05});_.position.set(x*(.6+M*.75),-.08,-1.9),g.add(_)}for(let M=0;M<5;M++){let _=3.2+M*.3,y=B(Je(.55,.12,_,.25),t,{thick:.05}),S=new ae;S.position.set(x*5.4,0,.6-M*.55),S.rotation.y=x*(-1.2+M*.32),y.position.z=-_/2,S.add(y),g.add(S)}n.add(g),u.push({w:g,s:x})}for(let x=0;x<7;x++){let g=(x-3)*.16,p=B(Je(.6,.12,2.4,.28),i,{thick:.04,line:10131084}),M=new ae;M.position.set(0,.2,-3.2),M.rotation.y=g,p.position.z=-1.1,M.add(p),n.add(M)}for(let x of[-1,1]){let g=B(new ze(.16,.2,1.1,8),s,{thick:.03,line:10119696});g.position.set(x*.55,-1.4,-.4),g.rotation.x=.6,n.add(g);for(let p=-1;p<=1;p++){let M=B(new Lt(.08,.45,6),2894389,{outline:!1});M.position.set(x*.55+p*.14,-1.85,-.05),M.rotation.x=Math.PI*.8,n.add(M)}}let d=uu(256,96,(x,g,p)=>{x.fillStyle="#ffcf3f",x.strokeStyle="#7a3f12",x.lineWidth=8,x.beginPath(),x.roundRect(6,6,g-12,p-12,40),x.fill(),x.stroke(),x.fillStyle="#7a3f12",x.font="bold 54px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText("弱點 ×2",g/2,p/2+3)}),m=new tr(new fs({map:d,depthTest:!1,transparent:!0}));return m.scale.set(6,2.25,1),m.position.set(0,9,1),m.visible=!1,m.renderOrder=10,n.add(m),n.scale.setScalar(1.25),n.userData={eyes:f,wings:u,weak:m},n}function Qa(){let n=new ae,e=6990056,t=15923455,i=5214166,s=B(Pt([[.01,-7],[1.4,-6.2],[3.3,-3.6],[4.4,0],[4.3,2.8],[3.4,5.2],[1.6,6.6],[.01,7]],28),e,{thick:.12,line:4157342});s.rotation.x=Math.PI/2,s.scale.set(1,1.35,.9),n.add(s);let r=B(new Ge(3.7,24,14),t,{thick:.08,line:9087432});r.scale.set(1,.55,2.3),r.position.set(0,-1.6,1.2),n.add(r);for(let f=0;f<4;f++){let u=new me(new st(2.6-f*.15,.05,6,30,Math.PI),new We({color:12375018}));u.rotation.set(Math.PI/2,0,0),u.position.set(0,-2.6,2.2-f*.9),n.add(u)}for(let f of[-1,1]){let u=du(.85,2896998,!1);u.position.set(f*3.2,.9,5.4),u.rotation.y=f*.9,n.add(u);let d=new me(new qn(.55,16),new We({color:16753592,transparent:!0,opacity:.7}));d.position.set(f*3.5,-.4,4.6),d.rotation.y=f*1.2,n.add(d);let m=B(Je(3.4,.35,1.5,.5),i,{thick:.07,line:4157342});m.position.set(f*4.1,-1.5,1.2),m.rotation.set(.2,f*-.4,f*-.55),n.add(m)}let o=new me(new st(1.8,.09,6,24,Math.PI*.55),new We({color:2896998}));o.position.set(0,-.9,8.4),o.rotation.set(-.35,0,Math.PI+Math.PI*.225),n.add(o);let c=new ae;c.position.set(0,.8,-9.2);let a=B(new ze(.9,1.6,3,12),e,{thick:.08,line:4157342});a.rotation.x=Math.PI/2-.5,a.position.set(0,.4,.8),c.add(a);for(let f of[-1,1]){let u=B(Je(5.2,.4,2.4,.9),i,{thick:.08,line:4157342});u.position.set(f*2.3,1.2,-.6),u.rotation.set(-.5,f*.35,f*.18),c.add(u)}n.add(c);let l=new ae;l.position.set(0,4,4.6);let h=[];for(let f=0;f<14;f++){let u=new me(new Ge(.22+f%3*.08,8,6),new We({color:14676479,transparent:!0,opacity:.9}));l.add(u),h.push({d:u,ph:f/14,a:f*2.4})}return n.add(l),n.userData={tail:c,update(f){c.rotation.x=Math.sin(f*2)*.3;for(let{d:u,ph:d,a:m}of h){let x=(f*.7+d)%1;u.position.set(Math.cos(m)*x*1.6,Math.sin(x*Math.PI)*3.5+x*1.5,Math.sin(m)*x*1.6),u.material.opacity=.9*(1-x)}}},n}var up=["58","72","35","89","61","100"];function mr(n){let e=new ae,t=up[Math.floor(Math.random()*up.length)],i=uu(256,256,(l,h,f)=>{l.fillStyle="#fbfcff",l.fillRect(0,0,h,f),l.strokeStyle="#a9bce0",l.lineWidth=3;for(let u=30;u<f;u+=26)l.beginPath(),l.moveTo(10,u),l.lineTo(h-10,u),l.stroke();l.strokeStyle="#d8443f",l.lineWidth=7,l.beginPath(),l.ellipse(h*.55,f*.55,62,50,-.2,0,Math.PI*2),l.stroke(),l.fillStyle="#d8443f",l.font="bold 70px sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText(t,h*.55,f*.57)}),s=new Yi({map:i,side:ot}),r=new mt,o=[0,0,1.6,-1.2,.06,-1.1,0,0,-.8,0,0,1.6,0,0,-.8,1.2,.06,-1.1];r.setAttribute("position",new Ke(o,3)),r.setAttribute("uv",new Ke([.5,1,0,0,.5,.15,.5,1,.5,.15,1,0],2)),r.computeVertexNormals();let c=new me(r,s);c.add(new me(r,new We({color:9410986,side:Bt,wireframe:!0}))),e.add(c);let a=new mt;if(a.setAttribute("position",new Ke([0,0,1.6,0,-.5,-.8,0,0,-.8],3)),a.computeVertexNormals(),e.add(B(a,15659770,{thick:.03,line:9410986,side:ot})),n){let l=B(new Lt(.16,.42,8),14173247,{thick:.02});l.rotation.x=Math.PI/2,l.position.z=1.6,e.add(l);for(let h of[-1,1]){let f=new me(new Ge(.07,8,6),new We({color:2894389}));f.position.set(h*.18,.08,1.15),e.add(f)}}return e.scale.setScalar(1.5),e}function ec(){let n=new ae,e=new ae;for(let u=0;u<8;u++)e.add(B(new Ge(2.3,6,14,u/8*Math.PI*2,Math.PI/4),u%2?16777215:14173247,{thick:.05}));e.scale.y=1.15,e.position.y=3.4,n.add(e);let t=uu(128,128,(u,d,m)=>{u.fillStyle="#2d2a30",u.fillRect(0,0,d,m),u.fillStyle="#fff",u.beginPath(),u.arc(64,54,28,0,Math.PI*2),u.fill(),u.fillRect(48,70,32,18),u.fillStyle="#2d2a30",u.beginPath(),u.arc(54,54,8,0,Math.PI*2),u.arc(74,54,8,0,Math.PI*2),u.fill(),u.strokeStyle="#fff",u.lineWidth=9,u.lineCap="round",u.beginPath(),u.moveTo(30,98),u.lineTo(98,120),u.moveTo(98,98),u.lineTo(30,120),u.stroke()}),i=new me(new Gt(1.2,1.2),new We({map:t,side:ot}));i.position.set(1.2,1.9,0),n.add(i);let s=B(new ze(.04,.04,2.2,6),7033920,{outline:!1});s.position.set(.6,1.4,0),n.add(s);let r=B(Je(1.6,.95,1.6,.16),11569770,{thick:.05});n.add(r);for(let[u,d]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]]){let m=new me(new ze(.025,.025,1.7,4),wt(7033920));m.position.set(u,1.25,d),n.add(m)}let o=new ae;o.position.set(-.2,.75,.1),o.add(B(new Ge(.42,14,10),3095147,{thick:.03}));let c=B(new Ge(.36,14,10),16176064,{thick:.03,line:11567216});c.position.y=.6,o.add(c);let a=new me(new qn(.1,10),new We({color:1381148}));a.position.set(.12,.66,.34),o.add(a);let l=new me(new Ge(.05,8,6),new We({color:1381148}));l.position.set(-.12,.66,.33),o.add(l);let h=B(new Lt(.55,.38,3),2959920,{thick:.03});h.position.y=1,h.rotation.y=Math.PI/6,o.add(h),n.add(o);let f=B(new ze(.16,.22,1,10),3817290,{thick:.03});return f.rotation.x=Math.PI/2,f.position.set(.3,.45,.95),n.add(f),n}function tc(){let n=new ae;n.add(B(new ze(1.7,2,1.3,16),16054011,{thick:.06}));let e=B(new Ge(1.4,16,10,0,Math.PI*2,0,Math.PI/2),5205232,{thick:.06});e.position.y=.65,n.add(e);let t=new ae;n.add(t);let i=B(new ze(.35,.48,2.3,12),16054011,{thick:.05});i.rotation.x=Math.PI/2,i.position.set(0,1.2,1.3),t.add(i);let s=new me(new Ge(.3,10,8),Ct(16739164,1));s.position.set(0,1.2,2.5),t.add(s);for(let r of[-1,1]){let o=du(.26,16734794,!0);o.position.set(r*.5,1.45,1.05),t.add(o);let c=new me(new gt(.5,.1,.1),new We({color:1381148}));c.position.set(r*.5,1.8,1.2),c.rotation.z=r*.4,t.add(c)}return n.userData={aim:t,eye:s},n}function nc(){let n=new ae,e=[[0,0,0,3.2],[-2.8,-.4,.4,2.4],[2.8,-.3,-.2,2.5],[-1.2,1.3,-.5,2.2],[1.4,1.2,.3,2.1]];for(let[r,o,c,a]of e){let l=B(new $i(a,2),7106713,{thick:.12,line:2895698});l.position.set(r,o,c),l.scale.y=.8,n.add(l)}let t=[];for(let r of[-1,1]){let o=new me(new Ge(.75,14,10),Ct(16773226,1.15));o.position.set(r*1.15,-.1,2.75),o.scale.set(1,.7,.5),n.add(o),t.push(o);let c=new me(new gt(1.5,.28,.3),new We({color:1842744}));c.position.set(r*1.15,.65,2.95),c.rotation.z=r*.5,n.add(c)}let i=new me(new st(.7,.12,6,12,Math.PI),new We({color:1842744}));i.position.set(0,-1.1,2.9),n.add(i);let s=new me(new Lt(.35,1.6,4),Ct(16773226,1.1));return s.position.set(1.8,-2.6,.5),s.rotation.z=.4,n.add(s),n.userData={eyes:t},n}function ic(){let n=new ae,e=16173381;for(let i of[-1,1]){let s=new ae;s.rotation.y=i*.95;let r=B(Je(1.5,.16,.42,.18),e,{mat:Ct(16766556,1),line:12159516,thick:.03});r.position.x=i*.68,s.add(r);for(let o=0;o<2;o++){let c=B(new bi(.05,.14+o*.08,3,6),e,{mat:Ct(16766556,1),line:12159516,thick:.015});c.position.set(i*(.45+o*.55),-.15-o*.04,.2),s.add(c)}n.add(s)}let t=B(new st(.2,.05,8,20),e,{mat:Ct(16769162,1.1),line:12159516,thick:.015});return t.rotation.x=Math.PI/2,t.position.y=.1,n.add(t),n}var gr={N:{name:"普通",color:"#8a93a8"},R:{name:"稀有",color:"#4f6cf0"},SR:{name:"超稀有",color:"#e0a92a"}},I1={maxSpeed:"極速",accel:"加速",regen:"能量回復",cost:"特殊能力耗能",steer:"轉向",gravity:"下沉",climb:"爬升",sink:"下降速度",armor:"受到傷害",pedal:"踩踏發電"},xo=[0,30,60],sc=[100,150,250],Ti=3,Ai=[{id:"am01-fan",module:"backpack",match:"涵道風扇",name:"涵道風扇",rarity:"R",stat:"maxSpeed",per:[.06,.13,.22],what:"包在環形風道裡的推進風扇，左右各一顆。",use:"提供升力和推力；風道擋住葉片，手指和頭髮都捲不進去。"},{id:"am01-strut",module:"backpack",match:"鋁合金支架",name:"鋁合金支架",rarity:"N",stat:"accel",per:[.1,.2,.32],what:"把風扇固定在書包兩側的蜂蜜金鋁管。",use:"支架越堅固，推力傳得越直接，加速越快。"},{id:"am01-ring",module:"backpack",match:"狀態光環",name:"狀態光環",rarity:"N",stat:"regen",per:[.15,.3,.5],what:"前蓋上的環形燈，藍／金／紅顯示剩餘電量。",use:"升級後的電源管理晶片讓能量回復更快。"},{id:"am02-turbine",module:"broom",match:"尾部渦輪推進器",name:"尾部渦輪推進器",rarity:"SR",stat:"maxSpeed",per:[.05,.12,.2],what:"掃把尾端的小型渦輪引擎。",use:"整台掃把的速度來源。"},{id:"am02-fins",module:"broom",match:"刷毛造型散熱鰭片",name:"刷毛散熱鰭片",rarity:"R",stat:"cost",per:[-.12,-.25,-.4],what:"做成掃把刷毛樣子的蜂蜜金鋁片。",use:"幫渦輪散熱，渦輪加力就能撐更久。"},{id:"am02-bar",module:"broom",match:"T 型握把",name:"T 型握把",rarity:"N",stat:"steer",per:[.12,.25,.4],what:"前方的 T 字把手，外面包軟膠止滑紋。",use:"握得穩，轉彎就更靈活。"},{id:"am03-gear",module:"wings",match:"主發條齒輪",name:"主發條齒輪",rarity:"R",stat:"regen",per:[.2,.45,.8],what:"齒輪箱裡儲存能量的主發條。",use:"發條越強，拍翼次數回得越快。"},{id:"am03-wing",module:"wings",match:"三段摺疊翼",name:"三段摺疊翼骨",rarity:"SR",stat:"gravity",per:[-.1,-.2,-.32],what:"可以摺三段的金屬翼骨＋可替換羽片。",use:"翼面效率越好，滑翔時掉得越慢。"},{id:"am03-housing",module:"wings",match:"齒輪箱外殼",name:"齒輪箱外殼",rarity:"N",stat:"armor",per:[-.08,-.16,-.25],what:"包住齒輪組的霧面白外殼。",use:"外殼越堅固，被打中時受到的傷害越少。"},{id:"am04-shield",module:"bubble",match:"全包覆氣泡罩",name:"全包覆氣泡罩",rarity:"SR",stat:"armor",per:[-.15,-.28,-.42],what:"360° 包住使用者的透明氣泡。",use:"被撞到時先破泡泡，人受到的傷害大幅減少。"},{id:"am04-nozzle",module:"bubble",match:"泡泡氣墊噴嘴",name:"泡泡氣墊噴嘴",rarity:"N",stat:"maxSpeed",per:[.1,.22,.36],what:"平台底下的六個噴嘴。",use:"噴出的氣泡越多，移動越快。"},{id:"am04-stick",module:"bubble",match:"單桿操縱器",name:"單桿操縱器",rarity:"R",stat:"accel",per:[.15,.3,.5],what:"唯一的一根操縱桿，頂端有紅色急停鈕。",use:"反應越靈敏，起步和煞停越快。"},{id:"am05-rotor",module:"umbrella",match:"同軸反轉旋翼",name:"同軸反轉旋翼",rarity:"SR",stat:"climb",per:[.12,.25,.4],what:"傘頂上下兩組、轉向相反的螺旋槳。",use:"扭力互相抵銷不會自轉；升級後爬升更快。"},{id:"am05-canopy",module:"umbrella",match:"傘面",name:"傘面（兼降落傘）",rarity:"R",stat:"sink",per:[-.15,-.3,-.45],what:"藍白相間的八片傘面。",use:"面積越有效率，自然下降越慢。"},{id:"am05-handle",module:"umbrella",match:"J 型握把",name:"J 型握把＋扳機",rarity:"N",stat:"maxSpeed",per:[.08,.18,.3],what:"彎鉤握把和紅色升降扳機。",use:"單手就能精準控制，前進更快。"},{id:"am06-crank",module:"cycle",match:"踩踏發電曲柄",name:"踩踏發電曲柄",rarity:"R",stat:"pedal",per:[.2,.45,.8],what:"踏板帶動的發電曲柄和金色齒盤。",use:"每踩一圈能發更多電。"},{id:"am06-wheel",module:"cycle",match:"輪旋翼",name:"輪轂旋翼",rarity:"SR",stat:"maxSpeed",per:[.08,.18,.3],what:"地上是車輪、天上翻轉 90° 變成升力風扇。",use:"一個零件兩種功能；升級後飛得更快。"},{id:"am06-wing",module:"cycle",match:"滑翔側翼",name:"滑翔側翼",rarity:"N",stat:"gravity",per:[-.12,-.25,-.4],what:"車身兩側的白色小翼。",use:"踩累了可以滑行，升級後掉得更慢。"}],Jn=[{id:"boba",name:"珍奶加特林",en:"BOBA GATLING",rarity:"N",fire:"projectile",what:"奶茶店朋友改裝的珍珠奶茶連發槍。",use:"連射珍珠，射速快、單發傷害低。",stats:{damage:[1.3,1.7,2.2],rate:[7,8.5,10]},color:3876384},{id:"ruler",name:"三角板手裏劍",en:"RULER SHURIKEN",rarity:"R",fire:"projectile",homing:3.5,count:3,what:"數學課的三角板，邊緣磨成刀刃。",use:"一次丟三支，會自動追蹤最近的敵人。",stats:{damage:[2,2.6,3.4],rate:[1.6,2,2.4]},color:8368895},{id:"fan",name:"狐火摺扇",en:"FOXFIRE FAN",rarity:"R",fire:"spread",what:"狐狸隊友的紅黑摺扇。",use:"揮出扇形風刃，近距離打一整群。",stats:{damage:[3,4,5.5],rate:[1.4,1.7,2]},color:15214891},{id:"halo",name:"融化光環迴力鏢",en:"HONEY HALO",rarity:"SR",fire:"boomerang",what:"用主角滴落的蜂蜜光環做成的 V 字迴力鏢。",use:"丟出會飛回來，黏到的敵人變慢。",stats:{damage:[4,5.5,7],rate:[.8,1,1.25]},color:16766556},{id:"tape",name:"修正帶結界",en:"CORRECTION FIELD",rarity:"R",fire:"erase",what:"一大捲修正帶，拉開就是一圈白色結界。",use:"把身邊的子彈全部塗掉，防守用。",stats:{damage:[1,2,3],rate:[.35,.45,.6],radius:[9,12,15]},color:16777215},{id:"key",name:"25 號黃金鑰匙",en:"GOLDEN KEY 25",rarity:"SR",fire:"melee",what:"25 造型的大鑰匙，也是羽翼的發條鑰匙。",use:"近戰重擊，把敵人鎖住 2 秒。",stats:{damage:[8,11,15],rate:[1,1.2,1.4]},color:15778632},{id:"bell",name:"下課鐘",en:"SCHOOL BELL",rarity:"SR",fire:"bell",what:"學校走廊上的下課鐘。",use:"大招：鐘一響，全場敵人停 4 秒。",stats:{damage:[5,8,12],rate:[.1,.13,.17]},color:15778632}],rc={boba:"基本連射，什麼都能打",ruler:"自動追蹤，打散開的敵人",fan:"近距離扇形，一次打一群",halo:"迴力鏢，打中會變慢",tape:"擦掉身邊的子彈（防守）",key:"近戰重擊，把敵人鎖住 2 秒",bell:"大招：全場暫停 4 秒"},dp={damage:"傷害",rate:"射速",radius:"範圍"};function Rn(n){return Ai.find(e=>e.id===n)||Jn.find(e=>e.id===n)||ac.find(e=>e.id===n)}function oc(n){return Jn.some(e=>e.id===n)}function fu(n,e){let t=Math.round(Math.abs(e)*100),i=["cost","gravity","sink","armor"].includes(n)?"−":"+";return`${I1[n]} ${i}${t}%`}function xr(n){let e=new ae;if(n==="boba"){e.add(B(Pt([[0,0],[.09,0],[.11,.3],[0,.3]],20),14857356,{thick:.008}));for(let i=0;i<12;i++){let s=B(new Ge(.022,10,8),3876384,{outline:!1}),r=i*2.4;s.position.set(Math.cos(r)*.092,.03+i%4*.035,Math.sin(r)*.092),e.add(s)}for(let i=0;i<4;i++){let s=B(new ze(.016,.016,.42,10),5205232,{thick:.004}),r=i/4*Math.PI*2;s.position.set(Math.cos(r)*.035,.42,Math.sin(r)*.035),e.add(s)}let t=B(new st(.06,.012,8,20),15778632,{thick:.003});t.rotation.x=Math.PI/2,t.position.y=.5,e.add(t)}else if(n==="ruler"){let t=new ai;t.moveTo(0,0),t.lineTo(.4,0),t.lineTo(0,.4),t.lineTo(0,0);let i=new ms;i.moveTo(.06,.06),i.lineTo(.22,.06),i.lineTo(.06,.22),i.lineTo(.06,.06),t.holes.push(i);let s=B(new sr(t,{depth:.015,bevelEnabled:!1}),10273535,{thick:.004});s.position.set(-.13,0,0),e.add(s)}else if(n==="fan"){e.add(B(new qn(.3,24,0,Math.PI),2959920,{outline:!1,side:ot}));let t=B(new $n(.2,.31,24,1,0,Math.PI),15214891,{outline:!1,side:ot});t.position.z=.003,e.add(t)}else if(n==="halo"){let t=ic();t.rotation.x=1.15,e.add(t)}else if(n==="tape"){let t=B(Je(.36,.2,.12,.05),15987958,{thick:.006});e.add(t);let i=B(new ze(.075,.075,.125,24),5205232,{thick:.004});i.rotation.x=Math.PI/2,i.position.x=-.06,e.add(i);let s=B(new gt(.08,.03,.06),14173247,{thick:.003});s.position.set(.2,-.06,0),e.add(s)}else if(n==="key"){let t=B(new ze(.025,.025,.6,12),15778632,{thick:.004});t.rotation.z=Math.PI/2,e.add(t);let i=B(new st(.1,.028,8,24),15778632,{thick:.004});i.position.x=-.38,e.add(i);for(let[s,r]of[[.2,.1],[.26,.07]]){let o=B(new gt(.04,r,.03),15778632,{thick:.003});o.position.set(s,-r/2-.02,0),e.add(o)}}else if(n==="bell"){e.add(B(Pt([[0,.3],[.06,.29],[.1,.22],[.13,.08],[.18,0],[.17,-.02],[0,-.02]].reverse(),24),15778632,{thick:.006}));let t=B(new st(.05,.015,8,16),3817290,{thick:.003});t.position.y=.34,e.add(t)}return e}var ac=[{id:"apple",name:"金蘋果",en:"GOLDEN APPLE",rarity:"SR",kind:"food",what:"浮島果園的金蘋果，咬下去會發光。",use:"補 40 血，5 秒金光無敵。",effects:["血量 +40","金光無敵 5 秒"]},{id:"konjac",name:"魔芋爽",en:"SPICY KONJAC",rarity:"R",kind:"food",what:"一包超辣的魔芋零食，吃完會辣到噴火。",use:"8 秒內速度 ×1.4、傷害 ×1.5。",effects:["速度 ×1.4（8 秒）","武器傷害 ×1.5（8 秒）"]}],Nn=n=>ac.some(e=>e.id===n);function yr(n){let e=new ae;if(n==="apple"){let t=B(new Ge(.5,24,16),16173381,{mat:Ct(16764746,1),line:12159516,thick:.03});t.scale.set(1,.92,1),e.add(t);let i=B(new st(.12,.04,8,16),14723370,{outline:!1});i.rotation.x=Math.PI/2,i.position.y=.44,e.add(i);let s=B(new ze(.03,.04,.25,8),8016432,{thick:.015});s.position.y=.55,s.rotation.z=.2,e.add(s);let r=B(new Ge(.16,12,8),5421455,{thick:.015});r.scale.set(1.4,.25,.7),r.position.set(.16,.6,0),r.rotation.z=-.4,e.add(r);let o=new me(new Ge(.1,8,6),new We({color:16776166}));o.position.set(-.22,.22,.38),e.add(o)}else if(n==="konjac"){let t=B(Je(.72,.9,.16,.06),14173247,{thick:.025});e.add(t);for(let c of[.47,-.47]){let a=B(new gt(.74,.07,.1),12072242,{thick:.01});a.position.y=c,e.add(a)}let i=document.createElement("canvas");i.width=256,i.height=256;let s=i.getContext("2d");s.fillStyle="#fff6e6",s.fillRect(0,0,256,256),s.fillStyle="#c62f2c",s.font='bold 64px "PingFang TC", sans-serif',s.textAlign="center",s.fillText("魔芋爽",128,110),s.fillStyle="#2c2466",s.font='bold 34px "PingFang TC", sans-serif',s.fillText("超辣 🔥",128,175);let r=new An(i);r.colorSpace=qt;let o=new me(new Gt(.5,.5),new We({map:r}));o.position.z=.085,e.add(o);for(let c=0;c<3;c++){let a=B(Je(.09,.45,.05,.02),15324856,{thick:.01});a.position.set(-.15+c*.15,.6+c%2*.06,0),a.rotation.z=(c-1)*.25,e.add(a);for(let l=0;l<3;l++){let h=new me(new gt(.03,.03,.02),new We({color:12988204}));h.position.set(a.position.x+(l-1)*.02,a.position.y-.1+l*.1,.03),e.add(h)}}}return e}var fp="sky.save.v1",pu=()=>({unlocked:1,best:{},gears:0,items:{boba:1},badges:{}}),ht=mu(),yo=!1;function mu(){try{return{...pu(),...JSON.parse(localStorage.getItem(fp)||"{}")}}catch{return pu()}}function Ms(){if(!yo)try{localStorage.setItem(fp,JSON.stringify(ht))}catch{}}var He={get review(){return yo},setReview(n){if(yo=n,n){let e=Object.fromEntries([...Ai,...Jn].map(t=>[t.id,ht.items[t.id]||1]));ht={...mu(),unlocked:6,items:e,gears:9999}}else ht=mu()},reset(){ht=pu(),Ms()},get gears(){return ht.gears},get unlocked(){return ht.unlocked},best(n){return ht.best[n]},level(n){return ht.items[n]||0},has(n){return!!ht.items[n]},addGears(n){ht.gears+=n,Ms()},badges(n){return(ht.badges||{})[n]||[]},addBadges(n,e){ht.badges??={};let t=new Set(ht.badges[n]||[]),i=e.filter(s=>!t.has(s));return ht.badges[n]=[...t,...i],Ms(),i},totalBadges(){return Object.values(ht.badges||{}).reduce((n,e)=>n+e.length,0)},collect(n){return ht.items[n]?(Nn(n)||(ht.gears+=15,Ms()),!1):(ht.items[n]=1,Ms(),!0)},canUpgrade(n){let e=ht.items[n]||0;return Nn(n)?!1:e>0&&e<Ti&&ht.gears>=xo[e]},upgrade(n){if(!this.canUpgrade(n))return!1;let e=ht.items[n];return ht.gears-=yo?0:xo[e],ht.items[n]=e+1,Ms(),!0},finishLevel(n,e){let t=ht.best[n],i=!t||e.score>t.score;return ht.best[n]={score:Math.max(e.score,t?.score||0),stars:Math.max(e.stars,t?.stars||0),time:t?Math.min(t.time,e.time):e.time},n>=ht.unlocked&&n<6&&(ht.unlocked=n+1),Ms(),i},designScore(){let n=0;for(let[e,t]of Object.entries(ht.items))if(!Nn(e))for(let i=0;i<t;i++)n+=sc[i];return n},stageScore(){return Object.values(ht.best).reduce((n,e)=>n+e.score,0)},clearedCount(){return yo?6:Object.keys(ht.best).length},totalStars(){return Object.values(ht.best).reduce((n,e)=>n+e.stars,0)},moduleMods(n){let e={};for(let t of Ai){if(t.module!==n)continue;let i=ht.items[t.id]||0;i&&(e[t.stat]=(e[t.stat]||0)+t.per[i-1])}return e},weaponStat(n,e){let t=Rn(n),i=Math.max(1,ht.items[n]||1);return t.stats[e]?.[i-1]},weaponsOwned(){return Jn.filter(n=>ht.items[n.id]).map(n=>n.id)},modulesUnlocked(){return Ye.map(()=>!0)}};function gu(n){let e={...n.flight},t=He.moduleMods(n.id),i=(s,r=s)=>{e[s]!==void 0&&t[r]&&(e[s]*=1+t[r])};return i("maxSpeed"),i("accel"),i("regen"),i("cost"),i("steer"),i("gravity"),i("climb"),i("sink"),i("pedalRegen","pedal"),e.armor=t.armor||0,e}var cc=new A(0,1,0),pp=.22;function gp(n,e,t){let i=fr(),s=qa();n.add(i.root,s.root);let r=Zi("fox",s);s.setPose(r.fan),s.snap();let o=Ye.map(F=>F.build()),c=[],a={pos:e.spawn.clone(),vel:new A,heading:Math.PI,camYaw:0,camPitch:pp,camDist:6.5,tool:0,energy:Ye.map(()=>1),grounded:!0,boost:!1,flapT:0,pulse:!1,closed:!1,pedal:!1,speed:0,thrust:0,dashT:0,bank:0,pitch:0,swapT:0,events:[],lookTarget:null,hp:100,maxHp:100,invuln:0,allowed:Ye.map(()=>!0),checkpoint:e.spawn.clone()};a.heading=0,a.camYaw=0;function l(F,C){if(!(F===a.tool&&c[F])){if(!a.allowed[F]){a.events.push({type:"locked",tool:F});return}hp(i,o[a.tool]),a.tool=F,c[F]=go(i,Ye[F],o[F]),a.swapT=.35,C||a.events.push({type:"swap",tool:F})}}c[0]=go(i,Ye[0],o[0]);let h=new A,f=new A,u=new A,d=new A,m=new zt,x=new zt,g=new vn,p=0;function M(F,C=!0){a.pos.copy(a.checkpoint),a.vel.set(0,0,0),a.grounded=C,a.events.push({type:"respawn",msg:F})}function _(){for(let F of e.islands){let C=a.pos.x-F.x,H=a.pos.z-F.z;if(C*C+H*H<F.r*F.r&&a.pos.y>F.top-3&&a.pos.y<F.top+1)return F}return null}function y(F,C,H){let V=Ye[a.tool],D=gu(V);a.invuln=Math.max(0,a.invuln-F),a.spicy=Math.max(0,(a.spicy||0)-F),a.gold=Math.max(0,(a.gold||0)-F),a.spicy>0&&(D.maxSpeed*=1.4,D.accel*=1.3);let U=o[a.tool];for(let Z=0;Z<6;Z++)H.pressed("Digit"+(Z+1))&&l(Z);let R=Z=>{for(let ie=1;ie<=6;ie++){let De=(a.tool+Z*ie+6)%6;if(a.allowed[De]){l(De);return}}};H.pressed("KeyQ")&&R(-1),H.pressed("KeyE")&&R(1);let Y=.0022*t.sensitivity;a.camYaw-=H.mouse.dx*Y,a.camPitch+=H.mouse.dy*Y*(t.invertY?-1:1),a.camPitch=Dt.clamp(a.camPitch,-.9,1.25),a.camDist=Dt.clamp(a.camDist+H.mouse.wheel*.6,3.2,14);let ne=H.axis("KeyS","KeyW"),de=H.axis("KeyA","KeyD"),Me=(H.held("Space")?1:0)-(H.held("KeyC")?1:0),ve=H.held("ShiftLeft")||H.held("ShiftRight"),q=t.speed??1;a.sprint=ve;let ee=ne!==0||de!==0;if(f.set(-Math.sin(a.camYaw),0,-Math.cos(a.camYaw)),u.set(Math.cos(a.camYaw),0,-Math.sin(a.camYaw)),a.grounded){d.copy(f).multiplyScalar(ne).addScaledVector(u,de),d.lengthSq()>1&&d.normalize(),a.vel.lerp(d.multiplyScalar((ve?13:6.5)*q),1-Math.exp(-12*F)),a.vel.y=0,a.pos.addScaledVector(a.vel,F);let Z=_()||e.home;a.pos.add(Z.delta);let ie=a.pos.x-Z.x,De=a.pos.z-Z.z,be=Math.hypot(ie,De);be>Z.r&&(a.pos.x=Z.x+ie/be*Z.r,a.pos.z=Z.z+De/be*Z.r),a.pos.y=Z.top+.95,(Me>0||H.pressed("KeyF"))&&(a.grounded=!1,a.vel.y=7,a.events.push({type:"takeoff"}));for(let L=0;L<6;L++)a.energy[L]=Math.min(1,a.energy[L]+F*.25);p+=F*a.vel.length()*2.2}else{let Z=(ve?1.45:1)*q;a.boost=!1,a.closed=!1,a.pedal=!1,a.pulse=!1;let ie=a.energy[a.tool],De=L=>a.energy[a.tool]>=L?(a.energy[a.tool]-=L,!0):!1;if(D.special==="boost"&&H.held("KeyF")&&ie>.01&&(a.boost=!0,Z=1.6,a.energy[a.tool]=Math.max(0,ie-D.cost/100*F)),D.special==="sprint"&&H.held("KeyF")&&ie>.01&&(Z=1.5,a.energy[a.tool]=Math.max(0,ie-D.cost/100*F)),D.special==="drop"&&H.held("KeyF")&&(a.closed=!0),H.pressed("KeyF")&&(D.special==="dash"&&De(D.cost/100)&&(a.vel.addScaledVector(f,30),a.dashT=.4,a.events.push({type:"dash"})),D.special==="flap"&&De(D.cost/100)&&(a.vel.y=Math.max(a.vel.y,0)+9,a.vel.addScaledVector(h.copy(a.vel).setY(0).normalize(),4),a.flapT=.6,a.events.push({type:"flap"})),D.special==="brake"&&De(D.cost/100)&&(a.vel.set(0,0,0),a.pulse=!0,a.events.push({type:"brake"}))),(!H.held("KeyF")||D.special==="dash"||D.special==="brake"||D.special==="flap")&&(a.energy[a.tool]=Math.min(1,a.energy[a.tool]+D.regen/100*F)),D.special==="sprint"&&ne>0&&(a.pedal=!0,a.energy[a.tool]=Math.min(1,a.energy[a.tool]+D.pedalRegen/100*F)),D.special==="flap"&&a.vel.y<-1&&(a.energy[a.tool]=Math.min(1,a.energy[a.tool]+.04*F)),D.hover){d.copy(f).multiplyScalar(ne).addScaledVector(u,de),d.lengthSq()>1&&d.normalize();let L=d.multiplyScalar(D.maxSpeed*Z);L.y=Me*D.climb,D.sink&&Me===0&&(L.y=-D.sink),a.closed&&(L.y=-28);let w=ee?D.accel:D.coast,z=1-Math.exp(-w*F),te=1-Math.exp(-(Me!==0||D.sink?3:D.coast)*F);a.vel.x+=(L.x-a.vel.x)*z,a.vel.z+=(L.z-a.vel.z)*z,a.vel.y+=(L.y-a.vel.y)*te}else{let L=-(a.camPitch-pp)*1.3,w=h.copy(f).multiplyScalar(Math.cos(L)).setY(Math.sin(L));if(d.copy(w).multiplyScalar(ne).addScaledVector(u,de*.6),d.lengthSq()>1&&d.normalize(),a.battery=!1,ne>0||de!==0){let oe=d.multiplyScalar(D.maxSpeed*Z);oe.y+=Me*D.climb,a.vel.lerp(oe,1-Math.exp(-D.accel*F))}else if(D.battery&&a.energy[a.tool]>0){a.battery=!0;let oe=h.copy(f).multiplyScalar(D.maxSpeed*D.battery.speed*q);oe.y=Me*D.climb,a.vel.lerp(oe,1-Math.exp(-D.accel*F)),a.energy[a.tool]=Math.max(0,a.energy[a.tool]-D.battery.drain/100*F)}else a.vel.multiplyScalar(Math.exp(-D.coast*F)),a.vel.y+=Me*D.climb*F*2;let z=Math.hypot(a.vel.x,a.vel.z),te=Dt.clamp(z/D.liftSpeed,0,1);if(a.battery||(a.vel.y-=D.gravity*(1-te*.92)*F),D.dive&&a.vel.y<0){let oe=-a.vel.y*D.dive*F*.5;a.vel.x+=Math.sign(a.vel.x)*Math.abs(a.vel.x/(z||1))*oe,a.vel.z+=Math.sign(a.vel.z)*Math.abs(a.vel.z/(z||1))*oe}let ue=D.maxSpeed*Z*1.25;a.vel.length()>ue&&a.vel.setLength(ue)}for(let L of e.updrafts.concat(a.extraDrafts||[])){let w=a.pos.x-L.x,z=a.pos.z-L.z;if(w*w+z*z<L.r*L.r&&a.pos.y>L.y0&&a.pos.y<L.y1){let te=D.updraft||(D.hover?.5:1.3);a.vel.y+=16*te*F,a.inDraft||a.events.push({type:"updraft"}),a.inDraft=!0}else a.inDraft&&w*w+z*z>L.r*L.r*1.5&&(a.inDraft=!1)}a.pos.addScaledVector(a.vel,F);let be=_();be&&a.vel.y<=.5&&a.pos.y<be.top+.95&&(a.pos.y=be.top+.95,Math.hypot(a.vel.x,a.vel.z)<16?(a.grounded=!0,a.vel.set(0,0,0),a.events.push({type:"land"})):a.vel.y=0),a.pos.y<vs+3&&(a.hp=Math.max(1,a.hp-15),M("掉進海裡了！扣 15 血，回到檢查點。",a.checkpointGrounded??!0)),Math.hypot(a.pos.x,a.pos.z)>1100&&(a.vel.x*=-.5,a.vel.z*=-.5,a.events.push({type:"bounds"}))}a.speed=a.vel.length(),a.thrust=Dt.clamp(a.speed/D.maxSpeed,0,1.5),a.flapT=Math.max(0,a.flapT-F),a.dashT=Math.max(0,a.dashT-F);let ge=Math.hypot(a.vel.x,a.vel.z);if(ge>.6){let ie=Math.atan2(a.vel.x,a.vel.z)-a.heading;ie=Math.atan2(Math.sin(ie),Math.cos(ie)),a.heading+=ie*(1-Math.exp(-6*F)),a.bank+=(Dt.clamp(-ie*1.6,-.7,.7)-a.bank)*(1-Math.exp(-4*F))}else a.bank*=Math.exp(-4*F);let O=!D.hover,$=0;a.grounded||(O?$=-Math.atan2(a.vel.y,Math.max(ge,1))*.8:$=Dt.clamp(ge/D.maxSpeed,0,1.3)*.35),a.pitch+=($-a.pitch)*(1-Math.exp(-5*F)),m.setFromAxisAngle(cc,a.heading),x.setFromEuler(g.set(a.pitch,0,a.grounded?0:a.bank)),i.root.quaternion.copy(m).multiply(x);let Q=Ye[a.tool].id==="wings"&&!a.grounded,le=a.grounded?Ye[a.tool].id==="cycle"?-.3:0:Q?-Math.sin(o[a.tool].phase||0)*.05:Math.sin(C*2.2)*.05;i.root.position.copy(a.pos).add(h.set(0,le,0));let Ee=a.swapT>0?1+Math.sin(a.swapT/.35*Math.PI)*.12:1;U.root.scale.setScalar(Ee*(U.carrying?.8:1)),a.swapT=Math.max(0,a.swapT-F);let j=c[a.tool],ce=Ye[a.tool].id;U.root.visible=!0;let k=a.grounded&&ce==="broom";if(k!==!!U.carrying&&(U.carrying=k,k?(U.root.position.set(0,.32,-.26),U.root.quaternion.setFromAxisAngle(new A(0,0,1),.85).multiply(new zt().setFromAxisAngle(cc,Math.PI/2)),U.root.scale.setScalar(.8)):(U.root.position.set(...Ye[a.tool].offset||[0,0,0]),U.root.quaternion.identity(),U.root.scale.setScalar(1))),a.grounded&&ce==="cycle"){let Z=o[a.tool].crankAngle||0,ie=Math.min(1,ge/3);j={...j,...mp(Z,ie)}}else if(a.grounded&&ce==="bubble")j={...j};else if(a.grounded){let Z=Math.sin(p)*Math.min(1,ge/3),ie=ce==="umbrella"?{...j}:{...Ya.stand};ie.lHip=[Z*.5,0,0],ie.rHip=[-Z*.5,0,0],ie.lKnee=[Math.max(0,-Z)*.6,0,0],ie.rKnee=[Math.max(0,Z)*.6,0,0],ce!=="umbrella"&&(ie.lShoulder=[-Z*.4,0,-.12],ie.rShoulder=[Z*.4,0,.12],ie.lElbow=[-.2,0,0],ie.rElbow=[-.2,0,0]),j=ie}else ce==="cycle"&&(j={...j,...mp(o[a.tool].crankAngle||0,1)});i.setPose(j);let xe=i.face;a.grounded?xe.setExpression("smile"):a.vel.y<-16?xe.setExpression("surprised"):a.boost||a.thrust>.85?xe.setExpression("determined"):xe.setExpression("smug");for(let Z of a.events)(Z.type==="dash"||Z.type==="flap")&&xe.setExpression("effort",.5),Z.type==="brake"&&xe.setExpression("surprised",.6),Z.type==="respawn"&&xe.setExpression("worried",2),Z.type==="swap"&&xe.setExpression("happy",.6);a.lookTarget?i.lookAtPoint(a.lookTarget):i.lookAt(0,a.grounded?0:.15);let se=Dt.clamp(a.speed/40,0,1.1)*(t.reducedMotion?.5:1);i.update(F,C,{wind:h.set(0,.25*se+(a.vel.y<-3?.4:0),-1*se).multiplyScalar(.9),wingAmp:a.grounded?.08:.18,wingRate:a.grounded?2:5,poseSpeed:ce==="cycle"?40:void 0}),U.anim?.(C,{climb:H.held("Space")||a.vel.y>3,dt:F,thrust:a.grounded?.1:Math.max(.2,a.thrust),boost:a.boost,flap:a.flapT>0?1:0,pulse:a.pulse,closed:a.closed,pedal:a.pedal||a.vel.length()>2,turn:H.axis("KeyA","KeyD"),airborne:!a.grounded,exhaust:!a.grounded,folded:a.grounded,hideShield:a.grounded}),mo(U.root,a.energy[a.tool]),U.beat&&(h.set(Math.sin(a.heading),0,Math.cos(a.heading)).multiplyScalar(.35),a.vel.add(h).y+=.15,a.shake=Math.max(a.shake||0,.025),a.events.push({type:"wingbeat"})),a.shake=Math.max(0,(a.shake||0)-F*.6),b(F,C)}let S=a.pos.clone().add(new A(-1.2,.3,1)),v=0,T=new A,P=Kn(s,{lHip:[-1.4,0,-.2],rHip:[-1.4,0,.2]},[{side:-1,at:[-.03,.06,.17],pole:[1,-1,.2]}]);function b(F,C){if(Ye[a.tool].id==="cycle"&&!a.grounded)o[a.tool].parts.find(D=>D.label.startsWith("後座")).obj.getWorldPosition(T),s.root.position.copy(T).add(h.set(0,.3,0)),s.root.quaternion.copy(i.root.quaternion),s.setPose(P);else{let D=h.set(-1.3,a.grounded?-.6:.35,-1.1).applyAxisAngle(cc,a.heading).add(a.pos);a.grounded&&(D.y=a.pos.y-.6),S.lerp(D,1-Math.exp(-(a.grounded?4:3.2)*F)),S.distanceTo(a.pos)>30&&S.copy(D),s.root.position.copy(S).add(h.set(0,a.grounded?0:Math.sin(C*2.6+1)*.12,0));let U=a.heading-v;U=Math.atan2(Math.sin(U),Math.cos(U)),v+=U*(1-Math.exp(-4*F)),s.root.quaternion.setFromAxisAngle(cc,v),s.setPose(r.fan)}s.lookAtPoint(i.J.head.getWorldPosition(h)),s.update(F,C,{wind:h.set(0,0,-Dt.clamp(a.speed/50,0,.8))})}function E(F){if(a.invuln>0||a.hp<=0)return!1;let C=gu(Ye[a.tool]),H=Math.max(1,Math.round(F*(1+C.armor)));return a.hp=Math.max(0,a.hp-H),a.invuln=.8,a.events.push({type:"hurt",dmg:H}),i.face.setExpression(a.hp>0?"effort":"worried",.6),!0}function N(F,C,H){a.checkpoint.copy(F),a.checkpointGrounded=C,a.pos.copy(F),a.vel.set(0,0,0),a.grounded=C,a.hp=a.maxHp,a.invuln=0,a.spicy=a.gold=0,a.energy=Ye.map(()=>1),H!==void 0&&l(H,!0)}return{st:a,angel:i,fox:s,models:o,update:y,setTool:l,respawn:M,hurt:E,reset:N,effectiveFlight:()=>gu(Ye[a.tool])}}function mp(n,e){let t=c=>[[-1.2+Math.cos(c-Math.PI/6)*.35*e,0,0],[1.4-Math.cos(c+Math.PI/6)*.3*e,0,0]],[i,s]=t(n),[r,o]=t(n+Math.PI);return{lHip:r,lKnee:o,rHip:i,rKnee:s}}function xp(n,e,t,i){let s=new A(e.pos.x,e.pos.y+.9,e.pos.z),r=Math.cos(e.camPitch),o=new A(Math.sin(e.camYaw)*r,Math.sin(e.camPitch),Math.cos(e.camYaw)*r).multiplyScalar(e.camDist).add(s);if(e.grounded&&(o.y=Math.max(o.y,e.pos.y+1.2)),n.userData.init||(n.position.copy(o),n.userData.init=!0),n.position.lerp(o,1-Math.exp(-12*t)),e.shake>0&&!i.reducedMotion){let a=e.shake*.6;n.position.x+=(Math.random()-.5)*a,n.position.y+=(Math.random()-.5)*a,n.position.z+=(Math.random()-.5)*a}n.lookAt(s);let c=58+(i.reducedMotion?0:Dt.clamp(e.speed-15,0,35)*.45);n.fov+=(c-n.fov)*(1-Math.exp(-4*t)),n.updateProjectionMatrix()}function yp(n){let e=new Set,t=new Set,i={dx:0,dy:0,wheel:0,locked:!1},s=new Set(["Space","Tab","ShiftLeft","ShiftRight","KeyW","KeyA","KeyS","KeyD","KeyF","KeyE","KeyR"]);return addEventListener("keydown",r=>{r.target instanceof HTMLInputElement||(s.has(r.code)&&!r.metaKey&&!r.ctrlKey&&r.preventDefault(),e.has(r.code)||t.add(r.code),e.add(r.code))}),addEventListener("keyup",r=>e.delete(r.code)),addEventListener("blur",()=>e.clear()),addEventListener("mousemove",r=>{i.locked&&(i.dx+=r.movementX,i.dy+=r.movementY)}),addEventListener("mousedown",r=>{if(!i.locked)return;let o="Mouse"+r.button;e.has(o)||t.add(o),e.add(o)}),addEventListener("mouseup",r=>e.delete("Mouse"+r.button)),addEventListener("wheel",r=>i.wheel+=Math.sign(r.deltaY),{passive:!0}),document.addEventListener("pointerlockchange",()=>{i.locked=document.pointerLockElement===n}),{mouse:i,held:r=>e.has(r),pressed:r=>t.has(r),axis:(r,o)=>(e.has(o)?1:0)-(e.has(r)?1:0),lock:()=>n.requestPointerLock?.(),endFrame(){t.clear(),i.dx=i.dy=i.wheel=0}}}var vr=n=>Ai.filter(e=>e.module===n).map(e=>e.id),vo=[{n:1,name:"放學鐘響",sub:"第一次飛行",tool:0,par:120,weapons:["boba","ruler","tape"],icon:"✈️",cast:["plane","planeRed"],castName:"考卷紙飛機（紅頭的會丟紙團）",ambient:{types:["plane","plane","planeRed"],count:[2,3],every:22,msg:"前方出現紙飛機小隊！"},story:"下課鐘一響，奶茶店的朋友塞給妳一把「珍奶加特林」：「路上有考卷紙飛機亂飛，小心喔！」",goal:"穿過 8 個光圈，降落在東北方的浮島",chests:[...vr("backpack"),"gears"],spawn:[0,0,6],spawnIsland:0},{n:2,name:"考卷紙飛機艦隊",sub:"速度與射擊",tool:1,par:150,weapons:["boba","ruler","fan"],icon:"📄",cast:["planeRed","plane","planeRed"],castName:"考卷紙飛機艦隊，一共 3 波",story:"期末考卷被風吹散，摺成一整支紙飛機艦隊！紅色機頭的會丟紙團，先打它們。",goal:"擊落 3 波紙飛機（共 30 架）",chests:[...vr("broom"),"ruler"],spawn:[0,0,6],spawnIsland:0},{n:3,name:"大老鷹攻擊",sub:"BOSS 戰",tool:2,par:180,weapons:["halo","key","boba"],icon:"🦅",cast:["eagle"],castName:"BOSS 大老鷹：眼睛發光就要俯衝了",story:"一隻巨大的老鷹盯上了浮島。牠的眼睛發光時就要俯衝了，記得閃開！",goal:"打倒大老鷹",chests:[...vr("wings"),"fan"],reward:"bell",spawn:[0,0,0],spawnIsland:1},{n:4,name:"雷雲颱風眼",sub:"乘著氣流往上",tool:4,par:160,weapons:["tape","ruler","boba"],icon:"⛈️",cast:["storm","planeRed"],castName:"雷雲（出現在頭上就快躲）＋紙飛機",ambient:{types:["planeRed","plane"],count:[2,3],every:20,msg:"暴風裡衝出一隊紙飛機！"},story:"暴風雲裡藏著颱風眼。只有乘著上升氣流才上得去。腳下出現黃色圓圈就是要打雷了——躲進上升氣流裡最安全！",goal:"沿著上升氣流，飛進高空的颱風眼",chests:[...vr("umbrella"),"halo"],spawn:[0,0,0],spawnIsland:2},{n:5,name:"天空鯨魚護送",sub:"保護任務",tool:3,par:140,weapons:["tape","ruler","halo"],icon:"🐋",cast:["whale","pirate"],castName:"要保護的雲鯨 vs 熱氣球海盜",story:"迷路的雲鯨要回家，熱氣球海盜卻想抓牠。用泡泡護盾和武器保護牠！",goal:"護送鯨魚抵達奶茶站（鯨魚不能被打倒）",chests:[...vr("bubble"),"tape"],spawn:[0,0,0],spawnIsland:3},{n:6,name:"雲城堡攻擊",sub:"最終關",tool:5,par:220,weapons:["bell","fan","boba"],icon:"🏰",cast:["turret","planeRed"],castName:"雲城堡砲台＋守衛紙飛機",ambient:{types:["planeRed","plane","planeRed"],count:[3,4],every:18,msg:"城堡守衛隊飛過來了！"},story:"一切的源頭：雲城堡在搞鬼。摧毀砲台、找到 25 號鑰匙，打開金色城門！",goal:"摧毀 4 座砲台 → 找到 25 號鑰匙 → 飛進城門",chests:[...vr("cycle"),"key"],spawn:[40,95,-560]}],lc=[{id:"nohit",icon:"🛡️",name:"無傷通關",how:"整關沒被打到"},{id:"allchest",icon:"📦",name:"寶箱全收",how:"4 個寶箱都打開"},{id:"combo",icon:"⚡",name:"連擊達人",how:"連擊達到 ×8"},{id:"foodie",icon:"🍎",name:"美食家",how:"吃滿 6 個食物"},{id:"speed",icon:"💨",name:"疾風",how:"比標準時間快很多"}],vp=8,_p=6;function L1(){let n=new ae,e=B(Je(1.6,.9,1.1,.12),5205232,{thick:.05});e.position.y=.45,n.add(e);let t=B(Je(1.66,.14,1.16,.06),15778632,{thick:.03});t.position.y=.85,n.add(t);let i=new ae;i.position.set(0,.9,-.55);let s=B(new ze(.55,.55,1.6,16,1,!1,0,Math.PI),15987958,{thick:.05});s.rotation.z=Math.PI/2,s.position.z=.55,i.add(s);let r=B(Je(.3,.32,.12,.05),15778632,{thick:.03});r.position.set(0,0,1.12),i.add(r),n.add(i);let o=new me(new ze(.5,.9,40,12,1,!0),new We({color:16769162,transparent:!0,opacity:.22,depthWrite:!1,side:ot,blending:yn}));o.position.y=20,n.add(o);let c=sn(16769162,4);return c.position.y=1.2,n.add(c),n.userData={lid:i,beam:o,sp:c},n}function Ep(n,e,t=4.2){let i=new ae;i.position.copy(n),i.lookAt(e);let s=B(new st(t,.38,10,40),15778632,{mat:Ct(16766556,.95),line:12159516,thick:.08});i.add(s);let r=sn(16769162,t*3.2);return r.material.opacity=0,i.add(r),{g:i,torus:s,sp:r,pos:n.clone(),r:t,normal:new A(0,0,1).applyQuaternion(i.quaternion),passed:!1}}function D1(n){let e=n.map(t=>new A(...t));return e.map((t,i)=>Ep(t,e[i+1]||t.clone().add(t.clone().sub(e[i-1]))))}function Mp(n,e,t){let i=n.clone().sub(t.pos).dot(t.normal),s=e.clone().sub(t.pos).dot(t.normal);return i*s>0||i===s?!1:n.clone().lerp(e,i/(i-s)).distanceTo(t.pos)<t.r+.4}function bp(n,e,t,i){let s=new ae;n.add(s);let r=null;function o(u,d){return d.map((m,x)=>{let g=L1();g.position.set(u[x][0],u[x][1],u[x][2]),g.rotation.y=Math.random()*Math.PI*2,s.add(g);let p=u[x][3]!==void 0?e.islands[u[x][3]]:null;return{m:g,item:m,opened:!1,openT:0,island:p,off:p?new A(u[x][0]-p.x,0,u[x][2]-p.z):null}})}function c(u,d){let m=new ae,x=yr(u);x.scale.setScalar(1.5),m.add(x,sn(u==="apple"?16766556:16743002,4.5)),m.position.copy(d),s.add(m),r.state.foods.push({id:u,g:m,base:d.clone(),ph:Math.random()*6})}function a(u,d,m){let x=e.islands[u];return[x.x+d,x.top,x.z+m,u]}let l={1(u){u.rings=D1([[0,14,-20],[15,24,-55],[40,30,-85],[60,26,-120],[85,34,-150],[105,42,-180],[122,40,-200],[134,38,-218]]),u.rings.forEach(d=>s.add(d.g)),u.chests=o([a(0,-12,-2),[30,40,-70],[95,48,-140],a(1,6,4)],r.def.chests),u.finish=e.islands[1];for(let d=0;d<4;d++)t.spawn("plane",new A(70+d*6,34,-110-d*5),{orbitR:10});u.step=0},2(u){u.center=new A(0,40,-120),u.wave=0,u.kills=0,u.total=30,u.waveT=1.5,u.chests=o([[-45,30,-95],[50,52,-150],[10,22,-180],a(0,-20,12)],r.def.chests)},3(u){let d=e.islands[1];u.center=new A(d.x,d.top+28,d.z),u.boss=null,u.bossT=3,u.chests=o([a(1,-6,5),[d.x+40,d.top+20,d.z-30],[d.x-45,d.top+35,d.z+20],[d.x+10,d.top+70,d.z+45]],r.def.chests),u.draft={x:d.x+25,z:d.z+25,r:12,y0:d.top-40,y1:d.top+120},h(u.draft)},4(u){let d=e.islands[2];u.drafts=[[d.x+18,d.z-20],[d.x+40,d.z-70],[d.x+20,d.z-125],[d.x-15,d.z-170]].map(([m,x],g)=>({x:m,z:x,r:11,y0:d.top-20+g*45,y1:d.top+70+g*45})),u.drafts.forEach(h),u.eye=Ep(new A(d.x-15,d.top+245,d.z-170),new A(d.x-15,d.top+260,d.z-170),12),u.eye.torus.material=Ct(12574975,1.1),s.add(u.eye.g),u.chests=o([a(2,5,-6),[d.x+60,d.top+60,d.z-78],[d.x+42,d.top+120,d.z-142],[d.x-38,d.top+200,d.z-168]],r.def.chests),u.boltT=3,u.drafts.forEach((m,x)=>{if(x%2===0)for(let g=0;g<3;g++)t.spawn(g?"plane":"planeRed",new A(m.x+25,m.y0+40,m.z),{orbitR:18})}),u.startY=d.top,i.weather?.("storm")},5(u){let d=e.islands[3];u.path=new io([new A(d.x+10,d.top+20,d.z-20),new A(d.x-20,d.top+10,d.z-100),new A(-30,30,90),new A(0,e.home.top+16,30)]),u.whale=Qa(),s.add(u.whale),u.whaleHp=100,u.k=0,u.speed=1/75,u.spawnT=4,u.chests=o([a(3,-7,3),[d.x-40,d.top+15,d.z-60],[-60,40,120],[25,30,60]],r.def.chests)},6(u){let d=e.castle.position;u.turrets=[[-16,11],[16,11],[-30,16],[30,16]].map(([m,x])=>t.spawn("turret",new A(d.x+m,d.y+1,d.z+x),{hpMul:1.8}));for(let m=0;m<6;m++)t.spawn(m%2?"planeRed":"plane",new A(d.x+(m-3)*8,d.y+25,d.z+60),{orbitR:25});u.chests=o([[d.x-40,d.y+2,d.z+40],[d.x+50,d.y+15,d.z+10],[d.x-10,d.y+40,d.z-20],[d.x,d.y+28,d.z+2]],r.def.chests),u.gate={pos:new A(d.x,d.y+2.5,d.z+8),normal:new A(0,0,1),r:5.2},u.stage="turrets"}};function h(u){let m=new Float32Array(480),x=[];for(let M=0;M<160;M++)x.push([Math.random()*6.28,Math.random(),u.r*(.3+Math.random()*.7)]);let g=new mt;g.setAttribute("position",new Rt(m,3));let p=new ir(g,new ps({color:16777215,size:.9,transparent:!0,opacity:.85,depthWrite:!1}));p.frustumCulled=!1,s.add(p),u.update=M=>{for(let _=0;_<160;_++){let[y,S,v]=x[_],T=(S+M*.08)%1,P=y+M*1.3+T*6;m[_*3]=u.x+Math.cos(P)*v,m[_*3+1]=u.y0+T*(u.y1-u.y0),m[_*3+2]=u.z+Math.sin(P)*v}g.attributes.position.needsUpdate=!0},r.state.extraDrafts.push(u)}let f={get current(){return r},get drafts(){return r?r.state.extraDrafts:[]},allies(){let u=r?.state;return u?.whale?[{pos:u.whale.position,radius:6,hit:d=>{u.whaleHp=Math.max(0,u.whaleHp-d),i.onAllyHit?.()}}]:[]},start(u){f.stop(),r={def:u,state:{extraDrafts:[],foods:[]},time:0,kills:0,chestsFound:0,ate:{apple:0,konjac:0},hurt:0,combo:0,maxCombo:0,lastKillT:-9,live:new Set,done:!1,failed:!1},l[u.n](r.state),r.chests=r.state.chests;let d=u.spawnIsland!==void 0?new A(e.islands[u.spawnIsland].x+u.spawn[0],e.islands[u.spawnIsland].top+.95,e.islands[u.spawnIsland].z+u.spawn[2]):new A(...u.spawn);r.spawn=d;let m=(x,g,p)=>new A(x,g,p);for(let x=0;x<3;x++)c("apple",d.clone().add(m(0,5+x,-22-x*12)));r.chests.forEach(x=>{c("apple",x.m.position.clone().add(m(0,5,8))),c("konjac",x.m.position.clone().add(m(7,4,-3)))});for(let x=0;x<r.chests.length-1;x++){let g=r.chests[x].m.position.clone().lerp(r.chests[x+1].m.position,.5).add(m(0,6,0));c(x%2?"konjac":"apple",g)}return r.grounded=u.spawnIsland!==void 0,r},stop(){s.clear(),t.clear(),i.weather?.("clear"),r=null},objective(){if(!r)return null;let u=r.state,d=r.def.n;if(d===1)return u.step===0?{text:`穿過光圈 ${u.rings.filter(m=>m.passed).length}/${u.rings.length}`}:{text:"降落在終點浮島（有寶箱的那座）"};if(d===2)return{text:`擊落紙飛機 ${u.kills}/${u.total}`,sub:`第 ${Math.max(1,u.wave)}/3 波`};if(d===3)return{text:u.boss?"打倒大老鷹":"大老鷹接近中……",boss:u.boss?{name:"大老鷹",hp:u.boss.hp/u.boss.maxHp}:null};if(d===4)return{text:`飛進颱風眼（高度 ${Math.max(0,Math.round(i.player().pos.y-u.startY))} / 245 m）`};if(d===5)return{text:`護送鯨魚 ${Math.round(u.k*100)}%`,boss:{name:"鯨魚",hp:u.whaleHp/100,ally:!0}};if(d===6){let m=u.turrets.filter(x=>x.alive).length;return u.stage==="turrets"?{text:`摧毀砲台 ${4-m}/4`}:u.stage==="key"?{text:"找到 25 號鑰匙（打開寶箱）"}:{text:"飛進金色城門！"}}return null},badgeLive(u){!r||r.live.has(u)||(r.live.add(u),i.onBadge?.(lc.find(d=>d.id===u)))},onKill(u){if(!r)return;r.kills++,r.combo=r.time-r.lastKillT<3?r.combo+1:1,r.lastKillT=r.time,r.maxCombo=Math.max(r.maxCombo,r.combo),i.onCombo?.(r.combo,u),r.combo>=vp&&f.badgeLive("combo");let d=u.obj.position.clone();u.def.boss?(c("apple",d.clone().add(new A(-3,0,0))),c("apple",d.clone().add(new A(3,0,0)))):Math.random()<.22?c("apple",d):Math.random()<.18&&c("konjac",d),r.def.n===2&&u.type.startsWith("plane")&&r.state.kills++},update(u,d,m,x,g){if(!r||r.done||r.failed)return;r.time+=u;let p=r.state,M=r.def.n,_=m.pos;for(let S of p.extraDrafts)S.update(d);let y=r.def.ambient;if(y){p.ambT=(p.ambT??8)-u;let S=t.alive(v=>!v.def.boss&&v.obj.position.distanceTo(_)<160).length;if(p.ambT<=0&&S<2&&!m.grounded){p.ambT=y.every*(.8+Math.random()*.4);let v=new A(Math.sin(m.heading),0,Math.cos(m.heading)),T=new A(v.z,0,-v.x),P=y.count[0]+Math.floor(Math.random()*(y.count[1]-y.count[0]+1)),b=_.clone().addScaledVector(v,75).add(new A(0,8,0));for(let E=0;E<P;E++){let N=b.clone().addScaledVector(T,(E-(P-1)/2)*9).add(new A(0,E%2*4,0));t.spawn(y.types[E%y.types.length],N,{chase:!0,orbitR:14})}i.toast?.(y.msg)}}for(let S=p.foods.length-1;S>=0;S--){let v=p.foods[S];v.g.rotation.y=d*1.8,v.g.position.copy(v.base).add(new A(0,Math.sin(d*2+v.ph)*.4,0)),v.g.position.distanceTo(_)<2.6&&(t.burst(v.g.position,v.id==="apple"?16766556:16738890,14,7,1.4),s.remove(v.g),p.foods.splice(S,1),r.ate[v.id]++,r.ate.apple+r.ate.konjac>=_p&&f.badgeLive("foodie"),i.onFood?.(v.id))}for(let S of r.chests){let v=S.m.userData;if(S.island&&S.m.position.set(S.island.x+S.off.x,S.island.top,S.island.z+S.off.z),S.opened){S.openT=Math.min(1,S.openT+u*2),v.lid.rotation.x=-S.openT*1.9,v.beam.material.opacity=.22*(1-S.openT),v.sp.material.opacity=1-S.openT;continue}v.beam.material.opacity=.18+Math.sin(d*3)*.06,S.m.position.distanceTo(_)<3.2&&(S.opened=!0,r.chestsFound++,r.chestsFound>=r.chests.length&&f.badgeLive("allchest"),t.burst(S.m.position.clone().add(new A(0,1.2,0)),16769162,16,8,1.6),i.onChest(S.item,S.m.position.clone()))}if(M===1)if(p.step===0){let S=p.rings.find(v=>!v.passed);p.rings.forEach(v=>{v.sp.material.opacity=v===S?.55+Math.sin(d*5)*.25:0}),S&&Mp(x,_,S)&&(S.passed=!0,S.torus.material.color.set(8368895),i.onRing(S.pos)),p.rings.every(v=>v.passed)&&(p.step=1),r.marker=S?.pos}else r.marker=new A(p.finish.x,p.finish.top+2,p.finish.z),m.grounded&&Math.hypot(_.x-p.finish.x,_.z-p.finish.z)<p.finish.r&&(r.done=!0);if(M===2){if(t.alive(T=>T.type.startsWith("plane")).length===0){if(p.waveT-=u,p.waveT<=0&&p.wave<3){p.wave++;let T=[8,10,12][p.wave-1],P=[0,3,5][p.wave-1];for(let b=0;b<T;b++){let E=b/T*Math.PI*2;t.spawn(b<P?"planeRed":"plane",p.center.clone().add(new A(Math.cos(E)*30,b%3*6,Math.sin(E)*30)),{orbitR:22+b%3*6})}p.waveT=2.5,i.banner?.(`第 ${p.wave} 波`,p.wave===3?"最後一波，紅頭的特別多！":"考卷紙飛機艦隊來了！")}p.wave===3&&p.kills>=p.total&&(r.done=!0)}let v=t.alive()[0];r.marker=v?v.obj.position:null}if(M===3&&(p.boss?p.boss.alive||(r.done=!0):(p.bossT-=u,p.bossT<=0&&(p.boss=t.spawn("eagle",p.center.clone().add(new A(-40,-20,18)),{hpMul:1,intro:3}),p.boss.home.copy(p.center),i.onBoss?.("appear",p.boss))),r.marker=p.boss?.alive?p.boss.obj.position:null),M===4){p.boltT-=u;let S=p.drafts.some(T=>Math.hypot(_.x-T.x,_.z-T.z)<T.r&&_.y>T.y0-5&&_.y<T.y1+5);if(p.boltT<=0&&!S){p.boltT=3+Math.random()*2;let T=new A(m.vel.x,0,m.vel.z).multiplyScalar(1.3);t.lightning(new A(_.x+T.x+(Math.random()-.5)*8,_.y-1,_.z+T.z+(Math.random()-.5)*8))}let v=p.drafts.find(T=>_.y<T.y1-25)||p.drafts[p.drafts.length-1];r.marker=_.y>p.drafts[3].y1-40?p.eye.pos:new A(v.x,Math.max(_.y,v.y0+10),v.z),(Mp(x,_,p.eye)||_.distanceTo(p.eye.pos)<10)&&(r.done=!0)}if(M===5){p.k=Math.min(1,p.k+u*p.speed);let S=p.path.getPointAt(p.k),v=p.path.getTangentAt(p.k);if(p.whale.position.copy(S),p.whale.lookAt(S.clone().add(v)),p.whale.userData.update(d),p.spawnT-=u,p.spawnT<=0&&p.k<.92){p.spawnT=7;let P=Math.random()<.5?-1:1,b=new A(-v.z,0,v.x).multiplyScalar(P*45);for(let E=0;E<2;E++)t.spawn("pirate",S.clone().add(b).add(v.clone().multiplyScalar(20+E*8)).add(new A(0,6*E,0)),{target:{pos:p.whale.position}})}p.whaleHp<=0&&(r.failed=!0,r.failReason="鯨魚被海盜抓走了……"),p.k>=1&&(r.done=!0);let T=t.alive(P=>P.type==="pirate")[0];r.marker=T?T.obj.position:p.whale.position}if(M===6)if(p.stage==="turrets"&&p.turrets.every(S=>!S.alive)&&(p.stage="key",i.toast?.("砲台全滅！快找 25 號鑰匙")),p.stage==="key"&&g("key")&&r.chests.find(S=>S.item==="key").opened&&(p.stage="gate",i.toast?.("拿到鑰匙了！飛進金色城門")),p.stage==="gate"&&_.distanceTo(p.gate.pos)<p.gate.r&&(r.done=!0),p.stage==="turrets"){let S=p.turrets.find(v=>v.alive);r.marker=S?.obj.position}else p.stage==="key"?r.marker=r.chests.find(S=>S.item==="key").m.position:r.marker=p.gate.pos},result(u){let d=r.chests.every(_=>_.opened),m=1+(d?1:0)+(u>=.5?1:0),x={nohit:r.hurt===0,allchest:d,combo:r.maxCombo>=vp,foodie:r.ate.apple+r.ate.konjac>=_p,speed:r.time<=r.def.par*.55},g=lc.filter(_=>x[_.id]).map(_=>_.id),p={過關:1e3,擊倒敵人:r.kills*50,寶箱:r.chestsFound*200,剩餘血量:Math.round(u*500),美食獎勵:(r.ate.apple+r.ate.konjac)*50,最高連擊:r.maxCombo*40,成就徽章:g.length*150,時間獎勵:Math.max(0,Math.round((r.def.par-r.time)*5))},M=Object.values(p).reduce((_,y)=>_+y,0);return{stars:m,score:M,parts:p,time:r.time,allChests:d,chests:r.chestsFound,ate:{...r.ate},badges:g,maxCombo:r.maxCombo}}};return f}var Qe=n=>document.querySelector(n),Sp=[[13,68],[29,34],[45,68],[61,32],[76,66],[88,32]],wp=[["#ffe0ef","#ff9fcb"],["#d4f7e9","#62d4ab"],["#e4ddff","#a08cf7"],["#ffe9cf","#ffab6b"],["#d6efff","#6fb9ff"],["#fff6c4","#ffcf3f"]],hc=0;function Ap(n){Qe("#m-stage").textContent=He.stageScore().toLocaleString(),Qe("#m-design").textContent=He.designScore().toLocaleString(),Qe("#m-total").textContent=(He.stageScore()+He.designScore()).toLocaleString(),Qe("#m-gears").textContent=He.gears,Qe("#map-review").checked=He.review;let e=Qe("#m-path");e.innerHTML="<svg><path/></svg>";let t=e.querySelector("path"),i=()=>e.clientWidth,s=()=>e.clientHeight,r=()=>Math.max(110,Math.min(180,i()/7.2)),o=vo.map((m,x)=>{let g=m.n>He.unlocked,p=He.best(m.n),M=document.createElement("div");M.className=`bubble${g?" locked":""}${!g&&!p?" next":""}`,M.style.setProperty("--c1",wp[x][0]),M.style.setProperty("--c2",wp[x][1]);let _=[1,2,3].map(v=>`<span class="${p&&p.stars>=v?"on":""}">★</span>`).join("");M.innerHTML=`<i class="shine"></i><span class="ico">${m.icon}</span><b class="num">${g?"🔒":m.n}</b><h3>${m.name}</h3>
      <p>${Ye[m.tool].code} ${Ye[m.tool].name}</p><div class="st">${_}</div>${p?`<small>${p.score.toLocaleString()}・🏅${He.badges(m.n).length}/5</small>`:""}`,e.appendChild(M);let y={L:m,el:M,locked:g,ph:x*1.7,x:0,y:0,vx:0,vy:0,drag:null,sq:0};y.home=()=>({x:Sp[x][0]/100*i(),y:Sp[x][1]/100*s()}),y.placed=!1,M.addEventListener("pointerdown",v=>{M.setPointerCapture(v.pointerId),y.drag={sx:v.clientX,sy:v.clientY,lx:v.clientX,ly:v.clientY,moved:0,t:performance.now()},M.classList.add("grab")}),M.addEventListener("pointermove",v=>{if(!y.drag)return;let T=v.clientX-y.drag.lx,P=v.clientY-y.drag.ly,b=performance.now(),E=Math.max(1,b-y.drag.t)/1e3;y.x+=T,y.y+=P,y.vx=T/E,y.vy=P/E,y.drag.moved+=Math.abs(T)+Math.abs(P),y.drag.lx=v.clientX,y.drag.ly=v.clientY,y.drag.t=b});let S=()=>{if(!y.drag)return;let v=y.drag.moved<6;y.drag=null,M.classList.remove("grab"),v&&(g?(y.vx+=(Math.random()-.5)*900,y.sq=1):n(m))};return M.addEventListener("pointerup",S),M.addEventListener("pointercancel",S),y}),c=-1e4,a=-1e4,l=0,h=0,f=performance.now();e.onpointermove=m=>{let x=e.getBoundingClientRect(),g=performance.now(),p=Math.max(1,g-f)/1e3,M=m.clientX-x.left,_=m.clientY-x.top;l=(M-c)/p,h=(_-a)/p,c=M,a=_,f=g},e.onpointerleave=()=>{c=a=-1e4},cancelAnimationFrame(hc);let u=performance.now(),d=m=>{if(document.body.dataset.mode!=="map")return;let x=Math.min(.033,(m-u)/1e3);u=m;let g=m/1e3,p=r(),M=p/2;if(i()>0){for(let y of o)if(!y.placed){let S=y.home();y.x=S.x,y.y=S.y,y.placed=!0}}if(!o[0].placed){hc=requestAnimationFrame(d);return}for(let y of o){if(y.drag)continue;let S=y.home(),v=S.x+Math.sin(g*.9+y.ph)*10,T=S.y+Math.sin(g*1.3+y.ph*1.7)*12;y.vx+=((v-y.x)*18-y.vx*3.2)*x,y.vy+=((T-y.y)*18-y.vy*3.2)*x;let P=y.x-c,b=y.y-a,E=Math.hypot(P,b);E<M&&Math.hypot(l,h)>250&&(y.vx+=l*.9+P/(E||1)*300,y.vy+=h*.9+b/(E||1)*300,y.sq=1,l=h=0)}for(let y=0;y<o.length;y++)for(let S=y+1;S<o.length;S++){let v=o[y],T=o[S],P=T.x-v.x,b=T.y-v.y,E=Math.hypot(P,b)||1,N=p-E;if(N>0){let F=P/E,C=b/E,H=N*.5;v.drag||(v.x-=F*H,v.y-=C*H,v.vx-=F*120,v.vy-=C*120,v.sq=Math.max(v.sq,.5)),T.drag||(T.x+=F*H,T.y+=C*H,T.vx+=F*120,T.vy+=C*120,T.sq=Math.max(T.sq,.5))}}for(let y of o){y.drag||(y.x+=y.vx*x,y.y+=y.vy*x),y.x=Math.min(i()-M*.6,Math.max(M*.6,y.x)),y.y=Math.min(s()-M*.6,Math.max(M*.6,y.y)),y.sq=Math.max(0,y.sq-x*2.5);let S=Math.sin(g*22)*.08*y.sq,v=Math.max(-.2,Math.min(.2,y.vx/3e3));y.el.style.width=y.el.style.height=p+"px",y.el.style.transform=`translate(${y.x-M}px, ${y.y-M}px) rotate(${v}rad) scale(${1+S}, ${1-S})`}let _=`M ${o[0].x} ${o[0].y}`;for(let y=1;y<o.length;y++){let S=o[y-1],v=o[y];_+=` Q ${(S.x+v.x)/2} ${S.y} ${(S.x+v.x)/2} ${(S.y+v.y)/2} T ${v.x} ${v.y}`}t.setAttribute("d",_),hc=requestAnimationFrame(d)};hc=requestAnimationFrame(d)}var U1={plane:()=>mr(!1),planeRed:()=>mr(!0),eagle:ja,whale:Qa,pirate:ec,turret:tc,storm:nc},_r,Mr,Er,_o,xu;function N1(n){let e=Qe("#i-view");if(!_r){_r=new ds({antialias:!0,alpha:!0}),_r.setPixelRatio(Math.min(devicePixelRatio,2)),e.appendChild(_r.domElement),Mr=new Ei,Mr.add(new Si(16777215,11977436,1.7));let a=new wi(16777215,2);a.position.set(2,3,4),Mr.add(a),Er=new $t(30,2.6,.1,100)}let t=e.clientWidth||480,i=190;_r.setSize(t,i),Er.aspect=t/i,Er.updateProjectionMatrix(),_o&&Mr.remove(_o),_o=new ae;let s=n.cast.length,r=n.cast.map((a,l)=>{let h=U1[a](),f=new tn().setFromObject(h),u=f.getSize(new A),d=f.getCenter(new A),m=new ae,x=(s===1?4.4:l===0?2.6:1.7)/Math.max(u.x,u.y*1.6,u.z*.8);return h.position.sub(d),m.add(h),m.scale.setScalar(x),m.position.x=s===1?0:(l-(s-1)/2)*(s===2?2.6:2.2),m.userData.m=h,_o.add(m),m});Mr.add(_o),Er.position.set(0,1.9,5.6),Er.lookAt(0,0,0),Qe("#i-castname").textContent=n.castName,cancelAnimationFrame(xu);let o=performance.now(),c=()=>{if(document.body.dataset.mode!=="intro")return;let a=(performance.now()-o)/1e3;r.forEach((l,h)=>{let f=n.cast[h]==="whale"?.95:.3,u=n.cast[h]==="whale"?.3:.7;l.rotation.y=Math.sin(a*.6+h)*u+f,l.position.y=Math.sin(a*1.6+h*1.3)*.08;let d=l.userData.m.userData;d.wings?.forEach(({w:m,s:x})=>m.rotation.z=x*Math.sin(a*5)*.35),d.update?.(a)}),_r.render(Mr,Er),xu=requestAnimationFrame(c)};xu=requestAnimationFrame(c)}function vu(n){requestAnimationFrame(()=>N1(n)),Qe("#i-kicker").textContent=`STAGE ${n.n}・${n.sub}`,Qe("#i-name").textContent=n.name,Qe("#i-story").textContent=n.story,Qe("#i-goal").textContent=n.goal;let e=Ye[n.tool];Qe("#i-tool").textContent=`${e.code} ${e.name}——${e.tagline}`,Qe("#i-weapons").innerHTML=n.weapons.map((t,i)=>`<span><kbd>${Ip[i]}</kbd> <b>${Rn(t).name}</b>${He.has(t)?"":"<em>借用</em>"}<small>${rc[t]}</small></span>`).join("")}var Sr,wr,uc,br,yu;function H1(){if(Sr)return;Sr=new ds({antialias:!0,alpha:!0}),Sr.setPixelRatio(Math.min(devicePixelRatio,2)),Sr.setSize(220,200),Qe("#c-view").appendChild(Sr.domElement),wr=new Ei,wr.add(new Si(16777215,11977436,1.7));let n=new wi(16777215,2);n.position.set(2,3,3),wr.add(n),uc=new $t(30,220/200,.01,50),uc.position.set(0,.25,2.4),uc.lookAt(0,0,0)}function F1(n){let e=Rn(n),t;if(oc(n))t=xr(n);else if(Nn(n))t=yr(n);else{let l=Ye.find(h=>h.id===e.module).build();t=new ae;for(let h of l.parts)(h.label.startsWith(e.match)||h.label.includes(e.match))&&t.add(h.obj)}let i=new ae;i.add(t);let s=new tn().setFromObject(t),r=s.getSize(new A),o=s.getCenter(new A),c=1.1/Math.max(r.x,r.y,r.z,.01);return t.position.sub(o),i.scale.setScalar(c),i}function _u(n,e){let t=Rn(n),i=e??Math.max(1,He.level(n));if(Nn(n))return t.effects.map(r=>`<div class="lvbar"><span><b>${r}</b></span></div>`).join("");let s=r=>Array.from({length:Ti},(o,c)=>`<i class="${c<r?"on":c===r?"next":""}"></i>`).join("");return oc(n)?Object.entries(t.stats).map(([r,o])=>`<div class="lvbar"><span>${dp[r]}　<b>${o[i-1]}</b>${i<Ti?` → ${o[i]}`:""}</span><span class="pips">${s(i)}</span></div>`).join(""):`<div class="lvbar"><span><b>${fu(t.stat,t.per[i-1])}</b>${i<Ti?` → ${fu(t.stat,t.per[i]).split(" ")[1]}`:"　已滿級"}</span><span class="pips">${s(i)}</span></div>
    <p style="font-size:12.5px;color:var(--ink-2);margin-top:4px">裝在 ${Ye.find(r=>r.id===t.module).code} ${Ye.find(r=>r.id===t.module).name}上・等級 Lv${i}/${Ti}</p>`}function Mu(n,e){H1();let t=Rn(n),i=gr[t.rarity];Qe("#c-rarity").textContent=`${t.rarity}・${i.name}`,Qe("#c-rarity").style.background=i.color,Qe("#c-new").hidden=!e,Qe("#c-kind").textContent=Nn(n)?"FOOD・可以吃的道具":oc(n)?"WEAPON・武器":`PART・零件（${Ye.find(o=>o.id===t.module).code}）`,Qe("#c-name").textContent=t.name,Qe("#c-what").textContent=t.what,Qe("#c-use").textContent=t.use,Qe("#c-stats").innerHTML=_u(n),Qe("#c-foot").textContent=Nn(n)?"解鎖了！之後在關卡裡看到就能直接吃。":e?"已收錄進設計圖鑑。到圖鑑花齒輪可以升級，模組會變強、還會加設計分。":"已經有這個寶物了，換成 15 個齒輪。",br&&wr.remove(br),br=F1(n),wr.add(br),cancelAnimationFrame(yu);let s=performance.now(),r=()=>{let o=(performance.now()-s)/1e3;co.uTime.value=o,br.rotation.y=o*.9,br.rotation.x=Math.sin(o*.7)*.2,Sr.render(wr,uc),yu=requestAnimationFrame(r)};r()}function Rp(){cancelAnimationFrame(yu)}function Cp({win:n,level:e,res:t,gearsEarned:i,newBest:s,failReason:r},o){if(Qe("#r-kicker").textContent=`STAGE ${e.n}・${e.name}`,Qe("#r-title").textContent=n?s?"過關！新紀錄！":"過關！":"失敗了……",Qe("#r-stars").innerHTML=n?[1,2,3].map(a=>`<span class="${t.stars>=a?"on":""}" style="animation-delay:${a*.25}s">★</span>`).join(""):"",n){Qe("#r-parts").innerHTML=Object.entries(t.parts).map(([f,u])=>`<dt>${f}</dt><dd>${u.toLocaleString()}</dd>`).join("")+'<dt class="sum">本關闖關分</dt><dd class="sum" id="r-score">0</dd>';let a=performance.now(),l=()=>{let f=Math.min(1,(performance.now()-a)/1200),u=document.getElementById("r-score");u&&(u.textContent=Math.round(t.score*(1-Math.pow(1-f,3))).toLocaleString(),f<1&&requestAnimationFrame(l))};setTimeout(()=>requestAnimationFrame(l),500),Qe("#r-badges").innerHTML=lc.map(f=>{let u=t.badges.includes(f.id),d=t.newBadges?.includes(f.id);return`<span class="badge ${u?"on":""}" title="${f.how}"><i>${f.icon}</i><b>${f.name}</b><small>${u?d?"NEW!":"已獲得":f.how}</small></span>`}).join("");let h=[];t.allChests||h.push(`寶箱 ${t.chests}/4`),t.stars<3&&!h.length&&h.push("血量要剩一半以上"),Qe("#r-gears").innerHTML=`獲得 ⚙ ${i} 齒輪${h.length?`　・　下一顆星：${h.join("、")}`:""}<br>這一關吃了 🍎 金蘋果 ×${t.ate?.apple||0}　🌶️ 魔芋爽 ×${t.ate?.konjac||0}`+(t.wingUp?`<br><span class="wing-up">✨ 翅膀進化了！Lv${t.wingUp.stage}「${t.wingUp.name}」——變大了，顏色也變了</span>`:"")}else Qe("#r-parts").innerHTML=`<dt>${r||"血量歸零"}</dt><dd></dd>`,Qe("#r-badges").innerHTML="",Qe("#r-gears").textContent=`這一趟撿到的 ⚙ ${i} 齒輪和寶物都會保留。`;let c=Qe("#r-btns");c.innerHTML="";for(let[a,l,h]of o){let f=document.createElement("button");f.textContent=a,h&&(f.className="primary"),f.onclick=l,c.appendChild(f)}}function Pp(n,e,t){let i=Qe("#objective");i.hidden=!n,n&&(i.querySelector("b").textContent=n.text,i.querySelector("small").textContent=n.sub||"");let s=Qe("#bossbar");s.hidden=!n?.boss,n?.boss&&(s.querySelector("span").textContent=n.boss.name,s.querySelector("i").style.width=`${Math.max(0,n.boss.hp)*100}%`,s.classList.toggle("ally",!!n.boss.ally));let r=Qe("#hp");r.querySelector("i").style.width=`${e.hp/e.maxHp*100}%`,r.querySelector("b").textContent=Math.ceil(e.hp),r.classList.toggle("low",e.hp<30),Qe("#h-gears").textContent=He.gears,Qe("#h-chests").textContent=t?`${t.chestsFound}/4`:"—",Qe("#h-food").textContent=t?`${t.ate.apple}・${t.ate.konjac}`:"—"}var Ip=["Z","X","V"],Tp="";function Lp(n,e,t){let i=Qe("#weapon"),s=n.join(",");s!==Tp&&(Tp=s,i.innerHTML="<small>武器　<kbd>R</kbd>／右鍵 切換</small>"+n.slice(0,3).map((r,o)=>`<div class="wslot" data-w="${r}"><kbd>${Ip[o]}</kbd><b>${Rn(r).name}</b><span class="wcd"><i></i></span></div>`).join("")),i.querySelectorAll(".wslot").forEach(r=>{let o=r.dataset.w===e;r.classList.toggle("on",o),r.querySelector("i").style.width=o?`${(1-t)*100}%`:"100%"})}function Dp(){let n=Qe("#hurt");n.classList.add("on"),setTimeout(()=>n.classList.remove("on"),60)}var Hn=n=>document.querySelector(n),Up={sensitivity:1,invertY:!1,reducedMotion:!1,hints:!0,volume:.6,speed:1,music:.5,sky:"sunset"};function Fp(){try{return{...Up,...JSON.parse(localStorage.getItem("sky.settings")||"{}")}}catch{return{...Up}}}function fc(n){try{localStorage.setItem("sky.settings",JSON.stringify(n))}catch{}}var Np,qe={volume:.6,ctx(){return Np??=new(window.AudioContext||window.webkitAudioContext),Np},tone(n,e=.25,t="sine",i=.18,s=.06){if(!this.volume)return;let r=this.ctx();n.forEach((o,c)=>{let a=r.createOscillator(),l=r.createGain();a.type=t,a.frequency.value=o;let h=r.currentTime+c*s;l.gain.setValueAtTime(0,h),l.gain.linearRampToValueAtTime(i*this.volume,h+.01),l.gain.exponentialRampToValueAtTime(1e-4,h+e),a.connect(l).connect(r.destination),a.start(h),a.stop(h+e+.05)})},whoosh(n=.4,e=1800,t=300,i=1){if(!this.volume)return;let s=this.ctx(),r=s.sampleRate*n,o=s.createBuffer(1,r,s.sampleRate),c=o.getChannelData(0);for(let f=0;f<r;f++)c[f]=(Math.random()*2-1)*(1-f/r);let a=s.createBufferSource(),l=s.createBiquadFilter(),h=s.createGain();a.buffer=o,l.type="bandpass",l.frequency.setValueAtTime(e,s.currentTime),l.frequency.exponentialRampToValueAtTime(t,s.currentTime+n),h.gain.value=.35*this.volume*i,a.connect(l).connect(h).connect(s.destination),a.start()},blup(){if(!this.volume)return;let n=this.ctx(),e=n.currentTime,t=n.createOscillator(),i=n.createGain();t.type="sine";let s=760+Math.random()*180;t.frequency.setValueAtTime(s,e),t.frequency.exponentialRampToValueAtTime(s*.35,e+.08),i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(.16*this.volume,e+.008),i.gain.exponentialRampToValueAtTime(1e-4,e+.1),t.connect(i).connect(n.destination),t.start(e),t.stop(e+.12)},ring(){this.tone([880,1318.5,1760],.5,"sine",.14,.07)},miya(n=0,e=1,t=1){let i=this.ctx(),s=i.currentTime+n,r=620*e,o=i.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(r,s),o.frequency.linearRampToValueAtTime(r*1.05,s+.09*t),o.frequency.linearRampToValueAtTime(r*1.32,s+.17*t),o.frequency.linearRampToValueAtTime(r*1.12,s+.34*t);let c=i.createOscillator(),a=i.createGain();c.frequency.value=7,a.gain.value=r*.025,c.connect(a).connect(o.frequency);let l=i.createGain();l.gain.setValueAtTime(0,s),l.gain.linearRampToValueAtTime(.05,s+.03),l.gain.linearRampToValueAtTime(.22,s+.07*t),l.gain.setValueAtTime(.22,s+.26*t),l.gain.exponentialRampToValueAtTime(1e-4,s+.38*t);let h=p=>{let M=i.createBiquadFilter();return M.type="bandpass",M.Q.value=6,p.forEach(([_,y],S)=>S?M.frequency.linearRampToValueAtTime(y,s+_*t):M.frequency.setValueAtTime(y,s)),M},f=h([[0,260],[.08,320],[.16,340],[.26,900]]),u=h([[0,1100],[.08,2700],[.16,2600],[.26,1450]]),d=h([[0,2600],[.1,3300],[.26,2800]]),m=i.createGain();m.gain.value=.55;let x=i.createGain();x.gain.value=.25;let g=i.createGain();g.gain.value=this.volume*2.2,o.connect(f).connect(l),o.connect(u).connect(m).connect(l),o.connect(d).connect(x).connect(l),l.connect(g).connect(i.destination),o.start(s),c.start(s),o.stop(s+.42*t),c.stop(s+.42*t)},syllable(n,e,t=.22){let i=this.ctx(),s=n+e[e.length-1][0],r=i.createOscillator();r.type="sawtooth";let o=[0,1,2].map(l=>{let h=i.createBiquadFilter();return h.type="bandpass",h.Q.value=6,h});e.forEach(([l,h,...f],u)=>{let d=u?"linearRampToValueAtTime":"setValueAtTime";r.frequency[d](h,n+l),f.forEach((m,x)=>o[x].frequency[d](m,n+l))});let c=i.createGain();c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(t,n+.04),c.gain.setValueAtTime(t,s-.1),c.gain.exponentialRampToValueAtTime(1e-4,s);let a=i.createGain();a.gain.value=this.volume*2.2,[1,.55,.25].forEach((l,h)=>{let f=i.createGain();f.gain.value=l,r.connect(o[h]).connect(f).connect(c)}),c.connect(a).connect(i.destination),r.start(n),r.stop(s+.02)},ohHi(){if(!this.volume)return;let n=this.ctx(),e=n.currentTime+.02;this.syllable(e,[[0,520,480,820,2500],[.12,560,520,860,2500],[.26,600,460,800,2450]],.2);let t=n.sampleRate*.07,i=n.createBuffer(1,t,n.sampleRate),s=i.getChannelData(0);for(let a=0;a<t;a++)s[a]=(Math.random()*2-1)*Math.sin(a/t*Math.PI);let r=n.createBufferSource(),o=n.createBiquadFilter(),c=n.createGain();r.buffer=i,o.type="bandpass",o.frequency.value=1600,c.gain.value=.12*this.volume,r.connect(o).connect(c).connect(n.destination),r.start(e+.36),this.syllable(e+.42,[[0,700,860,1250,2700],[.14,780,800,1500,2800],[.26,760,340,2400,3150],[.42,600,300,2500,3200]],.24)},treasure(){this.volume&&(this.miya(0,1.15,1),this.tone([1568,2093,2637],.35,"sine",.07,.05))},clear(){this.volume&&(this.miya(0,1,.9),this.miya(.36,1.26,1.25),setTimeout(()=>this.tone([587,740,880,1175,1480],.6,"triangle",.1,.1),820))},swap(){this.tone([520,780],.12,"triangle",.12,.04)},finish(){this.tone([659,784,988,1319,1568],.7,"sine",.14,.09)},soft(){this.tone([440],.15,"sine",.08)}},Hp={backpack:"🎒",broom:"🧹",wings:"🪽",bubble:"🫧",umbrella:"☂️",cycle:"🚲"},k1=[{id:"look",html:"移動 <kbd>滑鼠</kbd> 環顧四周"},{id:"takeoff",html:"按 <kbd>空白鍵</kbd> 起飛"},{id:"forward",html:"按住 <kbd>W</kbd> 往鏡頭看的方向飛"},{id:"vertical",html:"<kbd>空白鍵</kbd> 上升・<kbd>C</kbd> 下降"},{id:"sprint",html:"按住 <kbd>Shift</kbd> 加速（走路會變跑步）"},{id:"swap",html:"按 <kbd>1</kbd>–<kbd>6</kbd> 換飛行模組，感受不同手感"},{id:"special",html:"按 <kbd>F</kbd> 使用模組的特殊能力"},{id:"shoot",html:"<kbd>滑鼠左鍵</kbd> 射擊・<kbd>R</kbd> 換武器（準心附近的敵人會自動瞄準）"},{id:"ring",html:'跟著畫面上的 <span class="gold">金色箭頭</span> 前往目標'},{id:"book",html:"按 <kbd>Tab</kbd> 打開設計圖鑑，看每個模組為什麼這樣設計"}];function kp(n){let e=Hn("#toolbar");e.innerHTML=Ye.map((l,h)=>`
    <div class="slot" data-i="${h}">
      <svg viewBox="0 0 40 40"><circle class="bg" cx="20" cy="20" r="17"/><circle class="en" cx="20" cy="20" r="17" pathLength="100"/></svg>
      <span class="ti">${Hp[l.id]}</span>
      <kbd>${h+1}</kbd><b>${l.name}</b><small>${l.code}</small>
    </div>`).join("");let t=[...e.children],i=new Set;try{i=new Set(JSON.parse(localStorage.getItem("sky.tutorial")||"[]"))}catch{}let s=Hn("#hint"),r=null;function o(){r=n.hints?k1.find(l=>!i.has(l.id)):null,s.innerHTML=r?r.html:"",s.classList.toggle("show",!!r)}o();let c;return{complete(l){if(!i.has(l)){i.add(l);try{localStorage.setItem("sky.tutorial",JSON.stringify([...i]))}catch{}r?.id===l&&(s.classList.add("ok"),setTimeout(()=>{s.classList.remove("ok"),o()},650))}},resetTutorial(){i.clear();try{localStorage.removeItem("sky.tutorial")}catch{}o()},refreshHint:o,toast(l,h=2200){let f=Hn("#toast");f.textContent=l,f.classList.add("show"),clearTimeout(c),c=setTimeout(()=>f.classList.remove("show"),h)},hud(l,h){t.forEach((m,x)=>{m.classList.toggle("on",x===l.tool),m.classList.toggle("locked",!l.allowed[x]),m.querySelector(".en").style.strokeDasharray=`${Math.round(l.energy[x]*100)} 100`,m.classList.toggle("low",l.energy[x]<.25)});let f=Hn("#battery"),u=Ye[l.tool].flight.battery&&!l.grounded;if(f.hidden=!u,u){let m=l.energy[l.tool],x=Math.round(m*100),g=l.pedal?"charge":l.battery?"drain":"empty";f.className=g+(m<.25?" low":""),f.querySelector("i").style.width=`${x}%`,f.querySelector("span").textContent=g==="charge"?`🚲 踩踏充電中 ▲ ${x}%`:g==="drain"?`🔋 電池平飛中 ▼ ${x}%`:"⚠️ 沒電了！按住 W 踩踏"}Hn("#speed").textContent=Math.round(l.speed*3.6),Hn("#alt").textContent=Math.round(l.pos.y+70),Hn("#ctl").textContent=l.grounded?`${Hp[Ye[l.tool].id]} ${Ye[l.tool].name}・空白鍵起飛`:Ye[l.tool].controls;let d=Hn("#course");h.active||h.best?(d.hidden=!1,d.innerHTML=`<b>光圈賽道</b> ${h.next}/${h.total}<span>${dc(h.time)}</span>${h.best?`<small>最佳 ${dc(h.best)}</small>`:""}`):d.hidden=!0},marker(l,h,f,u,d){let m=Hn("#marker");if(l===null){m.hidden=!0;return}m.hidden=!1,m.classList.toggle("edge",!f),m.style.transform=`translate(${l}px, ${h}px)`,m.querySelector("i").style.transform=f?"":`rotate(${d}rad)`,m.querySelector("span").textContent=`${Math.round(u)} m`},banner(l,h,f=2400){let u=Hn("#banner");u.querySelector("b").textContent=l,u.querySelector("span").textContent=h||"",u.classList.remove("show"),u.offsetWidth,u.classList.add("show"),clearTimeout(this._bt),this._bt=setTimeout(()=>u.classList.remove("show"),f)},talk(l,h){let f=Hn("#talk");f.classList.toggle("show",l),h&&(f.querySelector(".line").innerHTML=h)}}}function dc(n){if(!n&&n!==0)return"--:--.-";let e=Math.floor(n/60),t=n-e*60;return`${String(e).padStart(2,"0")}:${t.toFixed(1).padStart(4,"0")}`}function Op(n,e){let t=Hn("#pause"),i=t.querySelector("[name=sens]"),s=t.querySelector("[name=inv]"),r=t.querySelector("[name=rm]"),o=t.querySelector("[name=hints]"),c=t.querySelector("[name=vol]"),a=t.querySelector("[name=speed]"),l=t.querySelector("[name=mvol]");i.value=n.sensitivity,s.checked=n.invertY,r.checked=n.reducedMotion,o.checked=n.hints,c.value=n.volume,a.value=n.speed,l.value=n.music;let h=()=>{n.sensitivity=Number(i.value),n.invertY=s.checked,n.reducedMotion=r.checked,n.hints=o.checked,n.volume=Number(c.value),n.speed=Number(a.value),n.music=Number(l.value),qe.volume=n.volume,fc(n),e?.()};[i,s,r,o,c,a,l].forEach(f=>f.addEventListener("input",h)),qe.volume=n.volume}var Bp=new We({color:11187142,transparent:!0,opacity:.28,depthWrite:!1}),zp=n=>"#"+n.toString(16).padStart(6,"0");function Vp(n,e){let t=new Ei;t.background=new Ie(15659510),t.add(new Si(16777215,11977436,1.7));let i=new wi(16777215,2);i.position.set(3,5,4),t.add(i);let s=new $t(32,1,.05,200),r=document.createElement("canvas");r.width=r.height=256;let o=r.getContext("2d"),c=o.createRadialGradient(128,128,10,128,128,128);c.addColorStop(0,"rgba(90,105,140,0.28)"),c.addColorStop(.5,"rgba(90,105,140,0.08)"),c.addColorStop(1,"rgba(90,105,140,0)"),o.fillStyle=c,o.fillRect(0,0,256,256);let a=new me(new Gt(3,3),new We({map:new An(r),transparent:!0,depthWrite:!1}));a.rotation.x=-Math.PI/2,t.add(a);let l=new me(new $n(1.25,1.27,96),new We({color:15778632}));l.rotation.x=-Math.PI/2,l.position.y=.002,t.add(l);let h=new ae;for(let O=0;O<24;O++){let $=new me(new Gt(.01,O%6?.04:.09),new We({color:10135232})),Q=O/24*Math.PI*2;$.rotation.x=-Math.PI/2,$.rotation.z=-Q,$.position.set(Math.sin(Q)*1.33,.003,Math.cos(Q)*1.33),h.add($)}t.add(h);let f=new ae;t.add(f),e.innerHTML=`
    <header class="hg-head">
      <div class="hg-top">
        <div class="hg-title"><b>設計圖鑑</b><span>DESIGN BOOK · AERO-MOD</span></div>
        <div class="hg-wallet"><span>⚙ <b class="hg-g">0</b></span><span>設計分 <b class="hg-d">0</b></span></div>
        <button class="hg-close" title="關閉（Tab）">✕</button>
      </div>
      <nav class="hg-tabs"></nav>
    </header>
    <aside class="hg-card"></aside>
    <svg class="hg-lines"></svg>
    <div class="hg-labels"></div>
    <div class="hg-ctrl">
      <label class="hg-explode">爆炸圖 <input type="range" min="0" max="1" step="0.01" value="0"></label>
      <button data-k="worn">裝在角色身上</button>
      <button data-k="fold" hidden>摺疊翅膀</button>
      <button data-k="spin" class="on">自動旋轉</button>
    </div>
    <div class="hg-hint">拖曳旋轉・滾輪縮放・← → 切換模組</div>`;let u=e.querySelector(".hg-tabs"),d=e.querySelector(".hg-card"),m=e.querySelector(".hg-labels"),x=e.querySelector(".hg-lines"),g=e.querySelector(".hg-explode input"),p=e.querySelector("[data-k=worn]"),M=e.querySelector("[data-k=fold]"),_=e.querySelector("[data-k=spin]"),y=["system",...Ye.map(O=>O.id),"weapons"],S=y.length-1;y.forEach((O,$)=>{let Q=document.createElement("button");Q.innerHTML=$===0?"系統總覽":$===S?"武器與道具":`<small>${Ye[$-1].code.replace("AM-","")}</small>${Ye[$-1].name}`,Q.onclick=()=>F($),u.appendChild(Q)});let v={page:1,explode:0,worn:!1,fold:!1,spin:!0,yaw:.6,pitch:.28,dist:4.2,open:!1},T=null,P=[];function b(){f.clear(),T=null,P=[]}function E(){e.querySelector(".hg-g").textContent=He.review?"∞":He.gears,e.querySelector(".hg-d").textContent=He.designScore().toLocaleString()}let N="boba";function F(O){if(v.page=O,E(),[...u.children].forEach((le,Ee)=>le.classList.toggle("on",Ee===O)),b(),g.value=v.explode=0,m.innerHTML="",x.innerHTML="",O===S){ne();return}if(O===0){Ye.forEach((le,Ee)=>{let j=le.build(),ce=new tn().setFromObject(j.root),k=ce.getSize(new A),xe=.75/Math.max(k.y,Math.max(k.x,k.z)*.72);j.root.scale.setScalar(xe);let se=new ae;se.add(j.root);let Z=ce.getCenter(new A).multiplyScalar(xe);j.root.position.sub(Z),se.position.set((Ee%3-1)*1.05,Ee<3?1.2:.35,0),f.add(se),P.push({holder:se,m:j,def:le})}),v.dist=5.4,v.pitch=.12,v.yaw=0,d.innerHTML=de(),e.querySelector(".hg-ctrl").hidden=!0;return}e.querySelector(".hg-ctrl").hidden=!1;let $=Ye[O-1],Q=$.build();T={def:$,model:Q,ch:null},M.hidden=$.id!=="wings",C(),D($)}function C(){let{def:O,model:$}=T;if(f.clear(),$.root.position.set(0,0,0),$.root.rotation.set(0,0,0),$.root.scale.setScalar(1),v.worn){let Q=fr();Q.setWingStage(He.clearedCount()),Q.setPose(go(Q,O,$)),Q.snap(),O.id==="bubble"?Q.root.position.y=.93:Q.root.position.y=1,f.add(Q.root),T.ch=Q,v.dist=5.2,v.ty=.95}else{T.ch=null;let Q=new ae;Q.add($.root),f.add(Q);let le=new tn().setFromObject($.root),Ee=le.getSize(new A),j=le.getCenter(new A),ce=1.25/Math.max(Ee.y,Math.max(Ee.x,Ee.z)*.72);Q.scale.setScalar(ce),$.root.position.set(-j.x,-le.min.y+.12/ce,-j.z),v.ty=Ee.y*ce/2+.12,v.dist=4.6}for(let Q of $.parts)Q.obj.position.copy(Q.home);V()}function H(O){return Ai.find($=>$.module===T.def.id&&(O.label.startsWith($.match)||O.label.includes($.match)))}function V(){for(let O of T.model.parts){let $=H(O),Q=!$||He.has($.id);O.obj.traverse(le=>{le.isMesh&&(le.userData.mat??=le.material,le.userData.isOutline?le.visible=Q:le.material=Q?le.userData.mat:le.userData.ghost??=Bp.clone())})}}function D(O){d.innerHTML=U(O);let $=d.querySelector(".hg-sketch img");$.onerror=()=>{$.replaceWith(Object.assign(document.createElement("div"),{className:"hg-sketch-empty",innerHTML:`放上你的手繪草圖<br><code>assets/sketches/${O.code}.png</code>`}))}}function U(O){let $=["shell","accent","metal","grip","safety"];return`
      <div class="hg-code">${O.code} <span>${O.en}</span></div>
      <h2>${O.name}</h2>
      <p class="hg-tag">${O.tagline}</p>
      ${R(O)}
      <section><h4>使用情境</h4><p>${O.context}</p></section>
      <section><h4>要解決的問題</h4><p>${O.pain}</p></section>
      <section><h4>設計決策</h4><ol>${O.decisions.map(([Q,le])=>`<li><b>${Q}</b>${le}</li>`).join("")}</ol></section>
      <section><h4>規格</h4><dl class="hg-specs">${Object.entries(O.specs).map(([Q,le])=>`<dt>${Q}</dt><dd>${le}</dd>`).join("")}</dl></section>
      <section><h4>CMF</h4><div class="hg-cmf">${$.map(Q=>{let le=Za.find(Ee=>Ee.key===Q);return`<span title="${le.mat}"><i style="background:${zp(le.hex)}"></i>${le.name}</span>`}).join("")}</div></section>
      <section><h4>操作</h4><p class="hg-ctl">${O.controls}</p></section>
      <section class="hg-sketch"><h4>手繪草圖</h4><img src="assets/sketches/${O.code}.png" alt="${O.name} 手繪草圖"></section>`}function R(O){let $=Ye.indexOf(O),Q=Ai.filter(Ee=>Ee.module===O.id),le=Q.filter(Ee=>He.has(Ee.id)).length;return`<section class="hg-parts"><h4>零件收集 ${le}/${Q.length}${le<Q.length?`　・　藏在第 ${$+1} 關的寶箱`:""}</h4>
      ${Q.map(Ee=>Y(Ee.id)).join("")}</section>`}function Y(O){let $=Rn(O),Q=He.level(O);if(Nn(O))return`<div class="up-row"><div><b><i class="rar" style="background:${gr[$.rarity].color}">${$.rarity}</i>${$.name}</b>${$.effects.map(j=>`<div class="lvbar"><span>${j}</span></div>`).join("")}</div><span class="up-max">可以吃</span></div>`;if(!Q)return'<div class="up-row ghost"><b>？？？</b><small>在關卡寶箱裡</small></div>';let le=xo[Q],Ee=Q>=Ti?'<span class="up-max">MAX</span>':`<button data-up="${O}" ${He.canUpgrade(O)?"":"disabled"}>升級 ⚙${He.review?0:le}<small>＋${sc[Q]} 分</small></button>`;return`<div class="up-row"><div><b><i class="rar" style="background:${gr[$.rarity].color}">${$.rarity}</i>${$.name}</b>${_u(O)}</div>${Ee}</div>`}function ne(){e.querySelector(".hg-ctrl").hidden=!0;let O=Jn.filter(se=>He.has(se.id)).length,$=Rn(N),Q=He.has(N);d.innerHTML=`<div class="hg-code">ARMORY <span>武器 ${O}/${Jn.length}</span></div>
      <h2>武器與道具</h2><p class="hg-tag">武器都來自角色身邊。點一下看詳細、升級。</p>
      <div class="wp-grid">${[...Jn,...ac].map(se=>`<button class="wp ${se.id===N?"on":""} ${He.has(se.id)?"":"ghost"}" data-w="${se.id}"><i class="rar" style="background:${gr[se.rarity].color}">${se.rarity}</i>${He.has(se.id)?se.name:"？？？"}</button>`).join("")}</div>
      ${Q?`<section><h4>這是什麼</h4><p>${$.what}</p></section><section><h4>做什麼用</h4><p>${$.use}</p></section><section class="hg-parts">${Y(N)}</section>`:'<section><p class="hg-note">還沒找到。去關卡的寶箱裡找找看！</p></section>'}`,f.clear();let le=Nn(N)?yr(N):xr(N),Ee=new tn().setFromObject(le),j=Ee.getSize(new A),ce=Ee.getCenter(new A),k=.95/Math.max(j.x,j.y,j.z),xe=new ae;le.position.sub(ce),xe.add(le),xe.scale.setScalar(k),xe.position.y=.7,Q||le.traverse(se=>{se.isMesh&&(se.userData.isOutline?se.visible=!1:se.material=Bp.clone())}),f.add(xe),P=[{holder:xe,m:{},spin:!0}],v.ty=.7,v.dist=4.4,v.pitch=.18}d.addEventListener("click",O=>{let $=O.target.closest("[data-w]");if($){N=$.dataset.w,ne();return}let Q=O.target.closest("[data-up]");if(!Q)return;let le=Q.dataset.up;if(!He.upgrade(le))return;if(qe.tone([523,659,784,1047],.35,"triangle",.12,.06),E(),v.page===S){ne();return}let Ee=d.scrollTop;D(T.def),d.scrollTop=Ee,V();let j=Rn(le);for(let ce of T.model.parts)(ce.label.startsWith(j.match)||ce.label.includes(j.match))&&(ce.pulse=1);ge.onupgrade?.(le)});function de(){return`
      <div class="hg-code">SYSTEM <span>AERO-MOD</span></div>
      <h2>${Ka.name}</h2>
      <p class="hg-tag">${Ka.lead}</p>
      <section><h4>設計語彙</h4><ol>${Ka.rules.map(O=>`<li><b>${O.t}</b>${O.d}</li>`).join("")}</ol></section>
      <section><h4>CMF 色票</h4><div class="cmf-list">${Za.map(O=>`<div class="cmf-row"><i style="background:${zp(O.hex)}"></i><div><b>${O.name}</b><small>${O.mat}・${O.role}</small><small>來自${O.from}</small></div></div>`).join("")}</div></section>
      <section><h4>難度光譜</h4><div class="hg-spectrum">${[...Ye].sort((O,$)=>O.specs.上手難度.split("★").length-$.specs.上手難度.split("★").length).map(O=>`<span>${O.code}<b>${O.name}</b><i>${O.specs.上手難度}</i></span>`).join("")}</div>
      <p class="hg-note">從「完全新手」到「速度玩家」，每一種使用者都有適合的模組。</p></section>`}p.onclick=()=>{v.worn=!v.worn,p.classList.toggle("on",v.worn),g.value=v.explode=0,T&&C()},M.onclick=()=>{v.fold=!v.fold,M.classList.toggle("on",v.fold)},_.onclick=()=>{v.spin=!v.spin,_.classList.toggle("on",v.spin)},g.oninput=()=>v.explode=Number(g.value),e.querySelector(".hg-close").onclick=()=>ge.close();let Me=null;e.addEventListener("pointerdown",O=>{(O.target===e||O.target.classList.contains("hg-labels"))&&(Me=[O.clientX,O.clientY])}),addEventListener("pointerup",()=>Me=null),addEventListener("pointermove",O=>{!Me||!v.open||(v.yaw-=(O.clientX-Me[0])*.008,v.pitch=Dt.clamp(v.pitch+(O.clientY-Me[1])*.006,-.3,1.2),Me=[O.clientX,O.clientY],v.spin=!1,_.classList.remove("on"))}),e.addEventListener("wheel",O=>{O.target.closest(".hg-card")||(v.dist=Dt.clamp(v.dist*(1+Math.sign(O.deltaY)*.08),2,12))},{passive:!0}),addEventListener("keydown",O=>{v.open&&(O.code==="ArrowRight"&&F((v.page+1)%y.length),O.code==="ArrowLeft"&&F((v.page+y.length-1)%y.length))});let ve=new A;function q(O){let $=H(O);if($&&!He.has($.id))return"<b>？？？</b><small>還沒找到，去關卡寶箱裡找</small>";let Q=$?`　Lv${He.level($.id)}`:"";return`<b>${O.label}${Q}</b>${O.note?`<small>${O.note}</small>`:""}`}function ee(){if(!T||v.explode<.25||e.clientWidth<900){m.childElementCount&&(m.innerHTML="",x.innerHTML="");return}let O=e.clientWidth,$=e.clientHeight,Q=d.getBoundingClientRect().right,le=T.model.parts.map(Z=>(Z.obj.getWorldPosition(ve),ve.project(s),{p:Z,x:(ve.x*.5+.5)*O,y:(-ve.y*.5+.5)*$})),Ee=(Q+O)/2,j=le.filter(Z=>Z.x<Ee).sort((Z,ie)=>Z.y-ie.y),ce=le.filter(Z=>Z.x>=Ee).sort((Z,ie)=>Z.y-ie.y),k=(Z,ie)=>{let De=70;return Z.map(be=>{let L=Math.max(be.y,De+34);return De=L,{...be,lx:ie,ly:Math.min(L,$-90)}})},xe=[...k(j,Q+30),...k(ce,O-30)],se=Math.min(1,(v.explode-.25)*4);m.innerHTML=xe.map(Z=>`<div class="hg-label ${Z.lx>Ee?"r":""}" style="${Z.lx>Ee?`right:${O-Z.lx}px`:`left:${Z.lx}px`};top:${Z.ly}px;opacity:${se}">${q(Z.p)}</div>`).join(""),x.setAttribute("viewBox",`0 0 ${O} ${$}`),x.innerHTML=xe.map(Z=>`<line x1="${Z.x}" y1="${Z.y}" x2="${Z.lx+(Z.lx>Ee?-6:6)}" y2="${Z.ly+10}" opacity="${se}"/><circle cx="${Z.x}" cy="${Z.y}" r="3.5" opacity="${se}"/>`).join("")}let ge={get isOpen(){return v.open},open(O){v.open=!0,e.hidden=!1,F(O??v.page)},close(){v.open=!1,e.hidden=!0,ge.onclose?.()},render(O,$){let Q=e.clientWidth,le=e.clientHeight;s.aspect=Q/le;let Ee=d.getBoundingClientRect(),j=e.querySelector(".hg-head").getBoundingClientRect().bottom,ce=Q>760?(Ee.right+Q)/2:Q/2,k=(j+le-70)/2;s.setViewOffset(Q,le,-(ce-Q/2),-(k-le/2),Q,le),s.updateProjectionMatrix(),v.spin&&(v.yaw+=O*.35);let xe=v.dist*(1+v.explode*.45),se=v.page===0?.78:v.ty;if(s.position.set(Math.sin(v.yaw)*Math.cos(v.pitch)*xe,se+Math.sin(v.pitch)*xe,Math.cos(v.yaw)*Math.cos(v.pitch)*xe),s.lookAt(0,se,0),T){let Z=v.worn?1:.9;for(let ie of T.model.parts)ie.obj.position.copy(ie.home).addScaledVector(ie.explode,v.explode*Z),ie.pulse>0&&(ie.pulse=Math.max(0,ie.pulse-O*1.5),ie.obj.scale.setScalar(1+Math.sin(ie.pulse*Math.PI)*.35));T.model.anim?.($,{dt:O,thrust:.4,airborne:!0,demo:!0,pedal:!0,folded:v.fold,hideShield:v.explode>.5&&!1}),mo(T.model.root,1),T.ch?.update(O,$,{})}for(let Z of P)Z.holder.rotation.y=$*.4,Z.m.anim?.($,{dt:O,thrust:.4,airborne:!0}),Z.m.root?mo(Z.m.root,1):Z.holder.rotation.x=Math.sin($*.6)*.15;n.render(t,s),ee()}};return e.hidden=!0,ge}var Ji=4.2,Gp=3.5,jn=new A(80,60,120),pc=.3,Eu=[{id:"wave",dur:3.2,expr:"happy"},{id:"flap",dur:3.4,expr:"determined"},{id:"spin",dur:2.2,expr:"happy"},{id:"cheek",dur:3.4,expr:"smug"}];function Wp(n,e,t,i){let s=new ae;s.position.copy(jn),n.add(s),s.add(B(Pt([[0,pc],[Ji*.93,pc],[Ji,.12],[Ji*.97,0]].reverse(),40),5684111,{thick:.05})),s.add(B(Pt([[Ji*.97,.02],[Ji*1.03,-.4],[Ji*.9,-.8],[Ji*.55,-2.2],[Ji*.2,-3.8],[0,-4.4]],16),6968514,{thick:.06}));let r=(O,$,Q,le)=>(s.add(O.root),O.J.plate&&(O.J.plate.visible=!1),{ch:O,pos:new A($,0,Q),ry:le,lift:0,grabbed:!1,jump:0,spin:0}),o=r(fr(),.1,1.9,.1),c=r(qa(),-1.55,-.6,.5),a=r($a(),1.45,-1.1,-.4),l=[o,c,a],h=o.ch,f=Zi("angel",h),u=O=>Kn(h,{lShoulder:[.05,0,-.12],lElbow:[-.15,0,0]},[{side:1,at:[.3+O*.08,.72,.05],pole:[1,-.6,-.4]}]),d=u(1),m=u(-1),x={lShoulder:[.1,0,-.5],rShoulder:[.1,0,.5],lElbow:[-.2,0,0],rElbow:[-.2,0,0],lKnee:[.3,0,0],rKnee:[.15,0,0],lHip:[-.1,0,0]},g={lShoulder:[-.3,0,-.9],rShoulder:[-.3,0,.9],lElbow:[-1.2,0,0],rElbow:[-1.2,0,0],lHip:[-.6,0,0],rHip:[-.6,0,0],lKnee:[1,0,0],rKnee:[1,0,0]},p={lKnee:[.5,0,0],rKnee:[.5,0,0],lHip:[-.3,0,0],rHip:[-.3,0,0]},M={lShoulder:[-.2,0,-1.2],rShoulder:[-.2,0,1.2],lElbow:[-.6,0,0],rElbow:[-.6,0,0],lHip:[-.3,0,-.1],rHip:[.2,0,.1],lKnee:[.6,0,0],rKnee:[.3,0,0]},_=Eu.reduce((O,$)=>O+$.dur,0),y=Zi("fox",c.ch),S={lShoulder:[-.2,0,-2.4],rShoulder:[-.2,0,2.4],lElbow:[-.3,0,0],rElbow:[-.3,0,0]},v=Zi("boba",a.ch),T={rShoulder:v.drink.rShoulder,rElbow:v.drink.rElbow},P=Kn(a.ch,T,[{side:-1,at:[-.28,.58,.06],pole:[1,-.6,-.4]}]),b=Kn(a.ch,T,[{side:-1,at:[-.2,.62,.06],pole:[1,-.6,-.4]}]),E=new fe,N=new ka,F=new Vn(new A(0,1,0),0),C=new A,H=new A,V=null,D=null,U=0,R=0;function Y(O){E.set(O.clientX/innerWidth*2-1,-(O.clientY/innerHeight)*2+1)}function ne(){return F.constant=-(s.position.y+pc),N.setFromCamera(E,V),N.ray.intersectPlane(F,C)?s.worldToLocal(C.clone()):null}addEventListener("pointerdown",O=>{if(!i()||!V||O.target.closest("button, a"))return;Y(O),N.setFromCamera(E,V);let $=null,Q=1/0;for(let le of l){let Ee=N.intersectObject(le.ch.root,!0)[0];Ee&&Ee.distance<Q&&($=le,Q=Ee.distance)}if($){let le=ne();D={who:$,offset:le?$.pos.clone().sub(le):new A},$.grabbed=!0,$.ch.face.setExpression("surprised")}else D={spin:O.clientX},R=0;document.body.style.cursor="grabbing"}),addEventListener("pointermove",O=>{if(Y(O),!D||!i())return;if(D.spin!==void 0){let le=(O.clientX-D.spin)*.01;U+=le,R=le*60,D.spin=O.clientX;return}let $=ne();if(!$)return;let Q=$.add(D.offset);Q.y=0,Q.length()>Gp&&Q.setLength(Gp),D.who.pos.copy(Q)}),addEventListener("pointerup",()=>{D?.who&&(D.who.grabbed=!1,D.who.ch.face.setExpression("happy",1.2)),D=null,document.body.style.cursor=""});let de=new A,Me=new A,ve=0,q=0,ee=document.createElement("div");ee.className="cover-say",ee.textContent="喔 hi！",document.body.appendChild(ee);let ge=new A;return{set visible(O){s.visible=O,O||ee.classList.remove("show")},greet(){ve=0,q=2.6},setWingStage(O){h.setWingStage(O)},update(O,$,Q){V=Q,s.position.set(jn.x+Math.sin($*.21)*.3,jn.y+Math.sin($*.5)*.35,jn.z),(!D||D.spin===void 0)&&(U+=R*O,R*=Math.exp(-3*O)),s.rotation.set(Math.sin($*.37)*.025,U,Math.sin($*.29)*.03),N.setFromCamera(E,Q),H.copy(N.ray.direction).multiplyScalar(Q.position.distanceTo(jn)*.8).add(N.ray.origin),ve+=O,q=Math.max(0,q-O);let le=ve%_,Ee=Eu[0];for(let z of Eu){if(le<z.dur){Ee=z;break}le-=z.dur}let j=le/Ee.dur,ce=0,k=0,xe=.1,se=2;if(o.grabbed)h.setPose(M),xe=.5,se=12;else{let z=q>1.6&&q<2.35;if(h.face.talking=z,h.face.setExpression(z?"smile":Ee.expr),Ee.id==="wave")h.setPose(Math.sin(le*9)>0?d:m);else if(Ee.id==="flap")h.setPose(x),xe=.55,se=11,ce=Math.sin(Math.min(1,j*1.4)*Math.PI)*.35;else if(Ee.id==="spin"){let te=Dt.clamp((j-.15)/.6,0,1);ce=Math.sin(te*Math.PI)*.9,k=Dt.smootherstep(te,0,1)*Math.PI*2,h.setPose(te>0&&te<1?g:p),xe=te>0&&te<1?.4:.1,se=9}else h.setPose(f.cheek)}o.jump=ce,o.spin=k,h.update(O,$,{wingAmp:xe,wingRate:se,poseSpeed:Ee.id==="wave"?14:9});let Z=($+1.3)%5,ie=Z>4;c.grabbed?c.ch.setPose({...S,lHip:[-.4,0,0],rHip:[.3,0,0]}):(c.ch.setPose(ie?S:y.fan),c.ch.face.setExpression(ie?"happy":"neutral")),c.jump=ie&&!c.grabbed?Math.sin((Z-4)*Math.PI)*.35:0,c.ch.update(O,$,{});let De=($+2.6)%6,be=De>4.2;a.grabbed?a.ch.setPose(M):(a.ch.setPose(be?Math.sin($*9)>0?P:b:v.drink),a.ch.face.setExpression(be?"happy":"neutral")),a.ch.update(O,$,{poseSpeed:12});let L=Math.atan2(Q.position.x-s.position.x,Q.position.z-s.position.z)-U;for(let z of l){z.lift+=((z.grabbed?.45:0)-z.lift)*(1-Math.exp(-10*O));let te=z.grabbed?Math.sin($*8)*.12:0;z.ch.root.position.set(z.pos.x,pc+z.ch.meta.standHeight+z.jump+z.lift,z.pos.z),z.ch.root.rotation.set(0,L+z.ry*.5+z.spin,te),z.ch.lookAtPoint(H)}ee.classList.toggle("show",q>.2&&q<2.45),q>0&&(h.J.neck.localToWorld(ge.set(.12,.55,0)).project(Q),ee.style.left=`${(ge.x*.5+.5)*innerWidth}px`,ee.style.top=`${(-ge.y*.5+.5)*innerHeight}px`);let w=innerWidth<760;de.set(jn.x+(w?0:1.8),jn.y+1.25,jn.z+(w?9.5:7.4)),Me.set(jn.x+(w?0:1.8),jn.y+(w?.6:1.45),jn.z),Q.position.distanceTo(de)>15?Q.position.copy(de):Q.position.lerp(de,1-Math.exp(-6*O)),Q.lookAt(Me),Math.abs(Q.fov-45)>.01&&(Q.fov=45,Q.updateProjectionMatrix())}}}var Xp=new A(0,1,0),dt=new A,Ri=new A,O1=new A,B1=new A(0,5,0),z1={plane:{hp:2,radius:2,contact:8,gears:4,build:()=>mr(!1)},planeRed:{hp:3,radius:2,contact:8,gears:6,build:()=>mr(!0),shoots:3.2},eagle:{hp:220,radius:5.5,contact:10,gears:60,build:ja,boss:!0},pirate:{hp:7,radius:2.8,contact:6,gears:8,build:ec},turret:{hp:22,radius:2.3,contact:0,gears:15,build:tc}};function qp(n,e){let t=new ae;n.add(t);let i=[],s=[],r=[],o=[],c=[],a=[],l=0,h=new ze(.35,.35,.12,12);function f(C,H){let V=Math.min(6,Math.ceil(H/3));for(let D=0;D<V;D++){let U=new ae,R=B(h,15778632,{thick:.04});R.rotation.x=Math.PI/2,U.add(R);for(let Y=0;Y<6;Y++){let ne=new me(new gt(.16,.16,.12),wt(15778632)),de=Y/6*Math.PI*2;ne.position.set(Math.cos(de)*.4,Math.sin(de)*.4,0),ne.rotation.z=de,U.add(ne)}U.position.copy(C),t.add(U),o.push({m:U,v:new A((Math.random()-.5)*10,4+Math.random()*5,(Math.random()-.5)*10),value:Math.round(H/V),t:0})}}function u(C,H,V=10,D=10,U=1.4){for(let R=0;R<V;R++){let Y=sn(H,U*(.6+Math.random()*.6));Y.position.copy(C),t.add(Y),c.push({o:Y,v:new A().randomDirection().multiplyScalar(D*(.4+Math.random())),life:.5+Math.random()*.3,t:0,size:Y.scale.x})}}function d(C,H,V,D=.5,U){let R=new me(new st(1,.06,8,48),new We({color:H,transparent:!0,depthWrite:!1}));R.position.copy(C),U?R.lookAt(dt.copy(C).add(U)):R.rotation.x=Math.PI/2,t.add(R),c.push({o:R,ring:V,life:D,t:0})}function m(C,H,V={}){let D=z1[C],U=D.build(),R=[];U.traverse(ne=>{ne.isMesh&&ne.material.isMeshToonMaterial&&(ne.material=ne.material.clone(),R.push(ne.material))}),U.position.copy(H),t.add(U);let Y={type:C,def:D,obj:U,hp:D.hp*(V.hpMul||1),maxHp:D.hp*(V.hpMul||1),home:H.clone(),phase:Math.random()*10,state:"idle",st:0,stun:0,slow:0,vel:new A,shootT:1+Math.random()*2,hitT:0,target:V.target,name:V.name,chase:!!V.chase,radius:D.radius,alive:!0,orbitR:V.orbitR??18,introT:V.intro||0,mats:R,flash:0,stages:new Set};return i.push(Y),Y}function x(C,H,V){if(!C.alive)return;let D=C.state==="tired"||C.state==="stagger";if(D&&(H*=2),C.hp-=H,C.hitT=.12,C.flash=1,e.onHit?.(C,H,D),C.type==="eagle"){u(C.obj.position,16184558,D?7:4,9,1.3);for(let U of[.66,.33])C.hp>0&&C.hp/C.maxHp<=U&&!C.stages.has(U)&&(C.stages.add(U),C.state="stagger",C.st=0,u(C.obj.position,8016438,24,14,1.8),e.onBoss?.("stagger",C))}C.hp<=0&&(C.alive=!1,t.remove(C.obj),u(C.obj.position,16777215,C.def.boss?40:12,C.def.boss?20:10,C.def.boss?4:1.6),C.type.startsWith("plane")&&T(C.obj.position),f(C.obj.position,C.def.gears),C.def.boss&&(u(C.obj.position,8016438,40,22,3),e.onBoss?.("down",C)),e.onKill?.(C))}let g=new Ge(.45,10,8);function p(C,H,V=20,D=16747130,U=8){let R=new me(g,Ct(D,1));R.position.copy(C);let Y=sn(D,2.4);R.add(Y),t.add(R),r.push({m:R,v:Ri.copy(H).sub(C).normalize().multiplyScalar(V).clone(),life:6,dmg:U})}let M={boba:new Ge(.36,12,8)},_={boba:[7028522,15981760],ruler:[8368895,16777215],fan:[16734780,16756778],halo:[16766556,16771488],tape:[16777215,13623551],key:[16766556,16773560],bell:[16766556,16774860]};function y(C,H,V){let[D,U]=_[C],R=H.clone().addScaledVector(V,.8);u(R,D,3,6,1.4),u(R,U,2,4,1)}function S(C,H){let[V,D]=_[C]||[16770992,16777215];u(H,V,7,9,1.3),u(H,D,5,6,1),d(H,V,2.2,.25)}let v=new Gt(.5,.35);function T(C){for(let H=0;H<9;H++){let V=new me(v,new We({color:H%3?16514303:14213877,side:ot,transparent:!0}));V.position.copy(C),t.add(V),c.push({o:V,shred:!0,v:new A((Math.random()-.5)*10,Math.random()*6,(Math.random()-.5)*10),spin:new A(Math.random()*8,Math.random()*8,Math.random()*8),life:1.4,t:0})}}function P(C,H,V=.18,D=140){let U=null,R=1/0;for(let Y of i){if(!Y.alive)continue;dt.copy(Y.obj.position).sub(C);let ne=dt.length();if(ne>D)continue;let de=dt.normalize().angleTo(H);de<V&&de*ne<R&&(U=Y,R=de*ne)}return U}function b(C,H,V,D,U){if(l>0)return!1;let R=Jn.find(ve=>ve.id===C),Y=D("damage");l=1/D("rate");let de=P(H,V),Me=de?dt.copy(de.obj.position).sub(H).normalize().clone():V.clone();if(R.fire==="projectile"){let ve=R.count||1;for(let q=0;q<ve;q++){let ee;if(C==="ruler"){let $=new ai;$.moveTo(0,0),$.lineTo(.6,0),$.lineTo(0,.6),ee=B(new Ua($),10273535,{outline:!1,side:ot})}else{ee=B(M.boba,4860960,{thick:.04,line:1970700});let $=new me(new Ge(.1,8,6),new We({color:16777215}));$.position.set(-.12,.14,.2),ee.add($)}ee.position.copy(H),t.add(ee);let ge=ve>1?(q-(ve-1)/2)*.12:(Math.random()-.5)*.03,O=Me.clone().applyAxisAngle(Xp,ge).multiplyScalar(C==="ruler"?45:70).add(U);s.push({m:ee,v:O,life:2.2,dmg:Y,homing:R.homing||0,spin:C==="ruler",id:C,trailT:0})}y(C,H,Me),e.sfx?.("shoot",C)}else if(R.fire==="spread"){let ve=i.filter(ge=>ge.alive&&dt.copy(ge.obj.position).sub(H).length()<18+ge.radius&&dt.normalize().angleTo(Me)<.65);ve.forEach(ge=>x(ge,Y));let q=new me(new $n(2,3.2,24,1,-.65,1.3),new We({color:16734780,transparent:!0,side:ot,depthWrite:!1,blending:yn}));q.position.copy(H),q.lookAt(dt.copy(H).add(Xp)),q.rotation.z=Math.atan2(Me.x,Me.z)-Math.PI/2,q.rotateZ(0);let ee=new ae;ee.position.copy(H),ee.quaternion.setFromUnitVectors(new A(1,0,0),Me),q.position.set(0,0,0),q.rotation.set(0,Math.PI/2,0),ee.add(q),t.add(ee),c.push({o:ee,grow:6,life:.35,t:0,mat:q.material}),y(C,H,Me),ve.forEach(ge=>S(C,ge.obj.position)),e.sfx?.("fan")}else if(R.fire==="boomerang"){let ve=new ae,q=ic();q.scale.setScalar(1.3),ve.add(q,sn(16765024,2.4)),ve.position.copy(H),t.add(ve),s.push({m:ve,v:Me.clone().multiplyScalar(40),life:3,dmg:Y,boomerang:!0,out:.6,pierce:!0,hitSet:new Set,slow:2.5,id:C,trailT:0}),y(C,H,Me),e.sfx?.("halo")}else if(R.fire==="erase"){let ve=D("radius"),q=0;for(let ee=r.length-1;ee>=0;ee--)r[ee].m.position.distanceTo(H)<ve&&(u(r[ee].m.position,16777215,3,4,1),t.remove(r[ee].m),r.splice(ee,1),q++);for(let ee of i)ee.alive&&ee.obj.position.distanceTo(H)<ve+ee.radius&&x(ee,Y);d(H,16777215,ve,.5),d(H,13623551,ve*.6,.35),u(H,16777215,14,ve*.9,1.2),q&&e.pop?.(`塗掉 ${q} 顆！`,H),e.sfx?.("erase",q)}else if(R.fire==="melee"){for(let ve of i)ve.alive&&(dt.copy(ve.obj.position).sub(H),dt.length()<7+ve.radius&&dt.normalize().angleTo(Me)<1&&(x(ve,Y),ve.stun=2,S(C,ve.obj.position),e.pop?.("鎖！🔒",ve.obj.position)));d(dt.copy(H).addScaledVector(Me,3),16766556,4,.3,Me),e.sfx?.("key")}else if(R.fire==="bell"){for(let ve of i)ve.alive&&(ve.stun=4,x(ve,Y));for(let ve of r)t.remove(ve.m);r.length=0,d(H,16766556,60,1.2),d(H,16774860,40,.9),d(H,16766556,25,.6);for(let ve of i)ve.alive&&e.pop?.("下課！",ve.obj.position);e.sfx?.("bell")}return!0}function E(C,H=7){let V=new me(new $n(H-.6,H,40),new We({color:16769126,transparent:!0,opacity:.8,side:ot,depthWrite:!1}));V.rotation.x=-Math.PI/2,V.position.copy(C),t.add(V);let D=nc();D.position.copy(C).add(new A(0,24,0)),D.scale.setScalar(.01),t.add(D),a.push({pos:C.clone(),r:H,t:0,warn:V,cloud:D,fired:!1})}function N(C,H,V){l=Math.max(0,l-C);let D=V.pos;for(let U of i){if(!U.alive)continue;let R=U.obj;if(U.hitT=Math.max(0,U.hitT-C),R.scale.setScalar(U.hitT>0?1.12:1),U.flash>0){U.flash=Math.max(0,U.flash-C*7);for(let ne of U.mats)ne.emissive.setScalar(U.flash*.75)}if(U.stun>0){U.stun-=C,R.rotation.z=Math.sin(H*20)*.1;continue}let Y=U.slow>0?.4:1;if(U.slow=Math.max(0,U.slow-C),U.st+=C*Y,U.type==="plane"||U.type==="planeRed"){if(!U.chase&&R.position.distanceTo(D)<90&&(U.chase=!0),U.chase&&U.home.lerp(O1.copy(D).add(B1),1-Math.exp(-.6*C)),U.state==="idle"){let Me=U.phase+U.st*.6;dt.set(U.home.x+Math.cos(Me)*U.orbitR,U.home.y+Math.sin(Me*1.7)*4,U.home.z+Math.sin(Me)*U.orbitR),R.position.distanceTo(D)<70&&Math.random()<C*.15&&(U.state="dive",U.st=0)}else dt.copy(D),U.st>2.2&&(U.state="idle",U.st=0);let ne=Ri.copy(R.position);R.position.lerp(dt,1-Math.exp(-(U.state==="dive"?1.6:1.2)*C*Y));let de=ne.sub(R.position).negate();de.lengthSq()>1e-5&&R.lookAt(Ri.copy(R.position).add(de)),U.def.shoots&&(U.shootT-=C,U.shootT<=0&&R.position.distanceTo(D)<60&&(U.shootT=U.def.shoots,p(R.position,D,18,16743018,7)))}else if(U.type==="eagle"){let ne=R.userData;if(U.introT>0){U.introT-=C;for(let{w:ge,s:O}of ne.wings)ge.rotation.z=O*Math.sin(H*4)*.45;let q=dt.set(U.home.x+45,U.home.y+4,U.home.z),ee=Ri.copy(R.position);R.position.lerp(q,1-Math.exp(-.35*C)),R.lookAt(ee.sub(R.position).negate().add(R.position).add(dt.set(0,0,.001))),U.st=0;continue}let de=U.state==="tired",Me=U.state==="stagger",ve=U.state==="dive"?.15:de?.35:1;for(let{w:q,s:ee}of ne.wings)q.rotation.z=ee*Math.sin(H*(de?2.5:4.5))*.35*ve+(U.state==="dive"?-ee*.6:de?ee*.45:0);if(ne.weak.visible=de||Me,ne.weak.visible&&(ne.weak.position.y=9+Math.sin(H*6)*.4),R.rotation.z=Me?R.rotation.z+C*9:R.rotation.z*Math.exp(-6*C),U.state==="idle"){let q=U.phase+U.st*.22;if(dt.set(U.home.x+Math.cos(q)*32,U.home.y+Math.sin(q*2)*6,U.home.z+Math.sin(q)*32),R.position.lerp(dt,1-Math.exp(-1*C)),R.lookAt(Ri.set(U.home.x+Math.cos(q+.2)*32,R.position.y,U.home.z+Math.sin(q+.2)*32)),U.shootT-=C,U.shootT<=0){U.shootT=U.hp<U.maxHp*.5?1.7:2.2;for(let ee=-1;ee<=1;ee++)p(R.position,dt.copy(D).add(Ri.set(ee*5,0,0)),22,16054015,6)}U.st>7&&(U.state="warn",U.st=0,e.onBoss?.("warn"))}else U.state==="warn"?(R.lookAt(D),ne.eyes.forEach(q=>q.scale.setScalar(1+Math.sin(H*30)*.6+.8)),U.st>1.5&&(U.state="dive",U.st=0,U.vel.copy(D).sub(R.position).setLength(30))):U.state==="dive"?(R.position.addScaledVector(U.vel,C*Y),ne.eyes.forEach(q=>q.scale.setScalar(1)),U.st>1.8&&(U.state="tired",U.st=0,e.onBoss?.("tired",U))):de?(R.position.y-=C*.8,R.rotation.x=Math.sin(H*3)*.12,ne.eyes.forEach(q=>q.scale.setScalar(.55)),U.st>3&&(U.state="idle",U.st=0,R.rotation.x=0,ne.eyes.forEach(q=>q.scale.setScalar(1)))):Me&&(R.position.y-=C*2,ne.eyes.forEach(q=>q.scale.setScalar(.4+Math.abs(Math.sin(H*8))*.6)),U.st>2&&(U.state="idle",U.st=0))}else if(U.type==="pirate"){let ne=U.target?.pos||D;dt.copy(ne).sub(R.position);let de=dt.length();de>22&&R.position.addScaledVector(dt.normalize(),9*C*Y),R.position.y+=Math.sin(H+U.phase)*.02,R.lookAt(Ri.set(ne.x,R.position.y,ne.z)),U.shootT-=C,U.shootT<=0&&de<60&&(U.shootT=2.6,p(Ri.copy(R.position).add(dt.set(0,.4,0)),ne,16,3817290,6))}else if(U.type==="turret"){let ne=R.userData;dt.copy(D).sub(R.position),ne.aim.rotation.y=Math.atan2(dt.x,dt.z),U.shootT-=C,ne.eye.scale.setScalar(U.shootT<.8?1.5+Math.sin(H*30)*.5:1),U.shootT<=0&&dt.length()<130&&(U.shootT=2.4,p(Ri.copy(R.position).add(dt.set(0,1.2,0)),D,26,16777215,9))}U.def.contact&&U.state!=="tired"&&U.state!=="stagger"&&R.position.distanceTo(D)<U.radius+.8&&e.onPlayerHit?.(U.def.contact,R.position)}for(let U=s.length-1;U>=0;U--){let R=s[U];if(R.life-=C,R.homing){let Y=P(R.m.position,dt.copy(R.v).normalize(),1.2,80);if(Y){let ne=dt.copy(Y.obj.position).sub(R.m.position).setLength(R.v.length());R.v.lerp(ne,1-Math.exp(-R.homing*C))}}if(R.boomerang&&(R.out-=C,R.out<0&&R.v.lerp(dt.copy(D).sub(R.m.position).setLength(46),1-Math.exp(-5*C)),R.m.rotation.y+=C*12,R.out<0&&R.m.position.distanceTo(D)<2&&(R.life=0)),R.spin&&(R.m.rotation.z+=C*25),R.trailT-=C,R.trailT<=0&&_[R.id]){R.trailT=.035;let Y=sn(_[R.id][1],R.id==="boba"?.7:1.1);Y.position.copy(R.m.position),t.add(Y),c.push({o:Y,v:new A,life:.25,t:0,size:Y.scale.x})}R.m.position.addScaledVector(R.v,C);for(let Y of i)if(!(!Y.alive||R.hitSet&&R.hitSet.has(Y))&&R.m.position.distanceTo(Y.obj.position)<Y.radius+.6){x(Y,R.dmg),R.slow&&(Y.slow=R.slow),S(R.id,R.m.position),R.pierce?R.hitSet.add(Y):R.life=0;break}R.life<=0&&(t.remove(R.m),s.splice(U,1))}for(let U=r.length-1;U>=0;U--){let R=r[U];R.life-=C,R.m.position.addScaledVector(R.v,C);let Y=!1;R.m.position.distanceTo(D)<1.2&&(e.onPlayerHit?.(R.dmg,R.m.position),Y=!0);for(let ne of e.allies?.()||[])R.m.position.distanceTo(ne.pos)<ne.radius&&(ne.hit(R.dmg),Y=!0,u(R.m.position,16747130,5,6,1.4));(Y||R.life<=0)&&(t.remove(R.m),r.splice(U,1))}for(let U=a.length-1;U>=0;U--){let R=a[U];if(R.t+=C,R.warn.material.opacity=.4+Math.sin(R.t*18)*.4,R.cloud.scale.setScalar(Math.min(1,R.t*3)*(1+Math.sin(R.t*10)*.04)),R.cloud.userData.eyes.forEach(Y=>Y.scale.set(1,.6*(R.t>1.1?1.6:1),1)),!R.fired&&R.t>1.4){R.fired=!0;let Y=new me(new ze(R.r*.2,R.r*.4,24,8,1,!0),new We({color:16774832,transparent:!0,opacity:.9,blending:yn,depthWrite:!1}));Y.position.copy(R.pos).add(dt.set(0,12,0)),t.add(Y),c.push({o:Y,life:.25,t:0,fade:!0});let ne=D.x-R.pos.x,de=D.z-R.pos.z;ne*ne+de*de<R.r*R.r&&Math.abs(D.y-R.pos.y)<40&&e.onPlayerHit?.(14,D),e.sfx?.("thunder")}R.t>1.7&&(t.remove(R.warn),t.remove(R.cloud),a.splice(U,1))}for(let U=o.length-1;U>=0;U--){let R=o[U];R.t+=C,R.m.rotation.y+=C*4;let Y=R.m.position.distanceTo(D);R.t>.5&&Y<14?R.v.lerp(dt.copy(D).sub(R.m.position).setLength(35),1-Math.exp(-6*C)):(R.v.y-=6*C,R.v.multiplyScalar(Math.exp(-1.5*C))),R.m.position.addScaledVector(R.v,C),(Y<1.4||R.t>12)&&(Y<1.4&&e.onGear?.(R.value),t.remove(R.m),o.splice(U,1))}for(let U=c.length-1;U>=0;U--){let R=c[U];R.t+=C;let Y=R.t/R.life;R.shred?(R.v.y-=9*C,R.o.position.addScaledVector(R.v,C),R.o.rotation.x+=R.spin.x*C,R.o.rotation.y+=R.spin.y*C,R.o.material.opacity=1-Y):R.v&&(R.o.position.addScaledVector(R.v,C),R.v.multiplyScalar(Math.exp(-3*C)),R.o.scale.setScalar(R.size*(1-Y))),R.ring&&(R.o.scale.setScalar(1+R.ring*Y),R.o.material.opacity=1-Y),R.grow&&(R.o.scale.setScalar(1+R.grow*Y),R.mat.opacity=1-Y),R.fade&&(R.o.material.opacity=.9*(1-Y)),Y>=1&&(t.remove(R.o),c.splice(U,1))}}function F(){for(let C of[i,s,r,o,c,a])C.length=0;t.clear(),l=0}return{enemies:i,spawn:m,fire:b,update:N,clear:F,damage:x,burst:u,ringFx:d,dropGears:f,lightning:E,enemyShoot:p,get cooldown(){return l},alive:C=>i.filter(H=>H.alive&&(!C||C(H)))}}var mc=n=>440*Math.pow(2,(n-69)/12),V1=[{pad:[55,59,62,67],bass:43},{pad:[57,61,64,69],bass:45},{pad:[54,57,61,66],bass:42},{pad:[54,59,62,66],bass:47},{pad:[55,59,62,67],bass:43},{pad:[57,61,64,69],bass:45},{pad:[54,57,62,66],bass:50},{pad:[54,57,62,66],bass:50}],G1=[[83,0,81,0,78,0,81,83],[86,0,83,0,81,0,0,0],[81,0,78,0,76,0,78,81],[83,0,0,0,0,0,78,81],[78,81,83,0,86,0,83,0],[88,0,86,0,83,0,81,0],[81,0,83,0,78,0,74,0],[74,0,0,0,0,0,0,0]],W1=[0,1,2,3,2,1,2,3],$p={calm:{bpm:84,drums:!1,melodyGain:.09,arpGain:.07,bassMode:"half"},adventure:{bpm:116,drums:!0,melodyGain:.11,arpGain:.05,bassMode:"bounce"}};function Yp(n){let e,t,i,s,r,o=null,c=null,a=0,l=0,h=null,f=.5,u=1;function d(){e=n(),t=e.createGain(),t.gain.value=0;let P=e.createDynamicsCompressor();P.threshold.value=-18,P.ratio.value=3,t.connect(P).connect(e.destination),i=e.createGain(),i.connect(t);let b=e.createConvolver(),E=e.sampleRate*2.4,N=e.createBuffer(2,E,e.sampleRate);for(let C=0;C<2;C++){let H=N.getChannelData(C);for(let V=0;V<E;V++)H[V]=(Math.random()*2-1)*Math.pow(1-V/E,3)}b.buffer=N,s=e.createGain(),s.gain.value=.32,s.connect(b).connect(t),r=e.createBuffer(1,e.sampleRate,e.sampleRate);let F=r.getChannelData(0);for(let C=0;C<F.length;C++)F[C]=Math.random()*2-1}function m(P,b=1){P.connect(i);let E=e.createGain();E.gain.value=b,P.connect(E).connect(s)}function x(P,b,E){let N=mc(P),F=e.createGain();F.gain.setValueAtTime(0,b),F.gain.linearRampToValueAtTime(E,b+.005),F.gain.exponentialRampToValueAtTime(1e-4,b+1.1);for(let[C,H,V]of[[1,1,"sine"],[2,.3,"sine"],[3,.06,"triangle"]]){let D=e.createOscillator(),U=e.createGain();D.type=V,D.frequency.value=N*C,U.gain.value=H,D.connect(U).connect(F),D.start(b),D.stop(b+1.2)}m(F,.8)}function g(P,b,E){let N=mc(P),F=e.createGain();F.gain.setValueAtTime(0,b),F.gain.linearRampToValueAtTime(E,b+.004),F.gain.exponentialRampToValueAtTime(1e-4,b+1.5);for(let[C,H]of[[1,1],[2.756,.22],[5.4,.06]]){let V=e.createOscillator(),D=e.createGain();V.frequency.value=N*C,D.gain.value=H,V.connect(D).connect(F),V.start(b),V.stop(b+1.6)}m(F,1)}function p(P,b,E){let N=e.createBiquadFilter();N.type="lowpass",N.frequency.value=750,N.Q.value=.4;let F=e.createGain();F.gain.setValueAtTime(0,b),F.gain.linearRampToValueAtTime(.03,b+.5),F.gain.setValueAtTime(.03,b+E-.3),F.gain.linearRampToValueAtTime(0,b+E+.4);for(let C of P)for(let H of[-7,7]){let V=e.createOscillator();V.type="sawtooth",V.frequency.value=mc(C),V.detune.value=H,V.connect(N),V.start(b),V.stop(b+E+.5)}N.connect(F),m(F,.6)}function M(P,b,E,N=.16){let F=e.createGain();F.gain.setValueAtTime(0,b),F.gain.linearRampToValueAtTime(N,b+.01),F.gain.exponentialRampToValueAtTime(N*.5,b+E*.7),F.gain.linearRampToValueAtTime(0,b+E);for(let[C,H,V]of[["triangle",1,1],["sine",2,.35]]){let D=e.createOscillator(),U=e.createGain();D.type=C,D.frequency.value=mc(P)*H,U.gain.value=V,D.connect(U).connect(F),D.start(b),D.stop(b+E+.05)}m(F,.1)}function _(P){let b=e.createOscillator(),E=e.createGain();b.frequency.setValueAtTime(130,P),b.frequency.exponentialRampToValueAtTime(45,P+.12),E.gain.setValueAtTime(.32,P),E.gain.exponentialRampToValueAtTime(1e-4,P+.28),b.connect(E),m(E,0),b.start(P),b.stop(P+.3)}function y(P,b,E,N,F){let C=e.createBufferSource(),H=e.createBiquadFilter(),V=e.createGain();C.buffer=r,H.type=b,H.frequency.value=E,V.gain.setValueAtTime(N,P),V.gain.exponentialRampToValueAtTime(1e-4,P+F),C.connect(H).connect(V),m(V,.25),C.start(P,Math.random()*.5),C.stop(P+F+.02)}function S(P,b,E){let N=$p[P],F=60/N.bpm/2,C=Math.floor(b/8)%8,H=b%8,V=Math.floor(b/64),D=V1[C];H===0&&p(D.pad,E,F*8),x(D.pad[W1[H]]+12,E,N.arpGain*(H%2?.7:1));let U=G1[C][H];U&&(N.drums||V%2===0)&&g(U,E,N.melodyGain),!N.drums&&V%2===1&&H===7&&C%2===1&&g(D.pad[3]+24,E,.04),N.bassMode==="half"?(H===0||H===4)&&M(D.bass,E,F*3.8):M(D.bass+[0,0,12,0,0,12,0,7][H],E,F*.9,.13),N.drums&&((H===0||H===4||H===6&&C%2===1)&&_(E),(H===2||H===6)&&y(E,"bandpass",1600,.12,.12),y(E,"highpass",8e3,H%2?.045:.025,.05),C===7&&H>=4&&y(E,"bandpass",1600,.06+H*.01,.08))}function v(){if(!o)return;let P=60/$p[o].bpm/2;for(l<e.currentTime-.1&&(l=e.currentTime+.05);l<e.currentTime+.2;)S(o,a,l),l+=P,a++}function T(P=.5){if(!e)return;let b=f*u*.9;t.gain.cancelScheduledValues(e.currentTime),t.gain.setValueAtTime(t.gain.value,e.currentTime),t.gain.linearRampToValueAtTime(b,e.currentTime+P)}return{play(P){e||d(),!(P===o||P===c)&&(c=P,t.gain.cancelScheduledValues(e.currentTime),t.gain.setValueAtTime(t.gain.value,e.currentTime),t.gain.linearRampToValueAtTime(0,e.currentTime+.4),setTimeout(()=>{o=c,c=null,a=0,l=e.currentTime+.05,T(.8)},o?420:0),h??=setInterval(v,25))},setVolume(P){f=P,T(.2)},setDuck(P){u=P?.35:1,T(.4)},get current(){return o}}}var hn=Fp(),Qn=new ds({antialias:!0});Qn.setPixelRatio(Math.min(devicePixelRatio,1.5));document.getElementById("game").appendChild(Qn.domElement);var Sn=new Ei,bn=new $t(58,1,.1,4e3),un=n=>document.querySelector(n),Et="title",wc=Yp(()=>qe.ctx()),Ru=!1;function n0(n){return n==="play"&&on?"adventure":"calm"}function Pc(){wc.setVolume(hn.musicOn===!1?0:hn.music??.5);let n=document.getElementById("music-toggle");n&&(n.textContent=hn.musicOn===!1?"🔇 音樂關":"🎵 音樂開",n.classList.toggle("off",hn.musicOn===!1))}function i0(){hn.musicOn=hn.musicOn===!1,fc(hn),Pc(),Et==="play"&&lt.toast(hn.musicOn?"🎵 音樂開":"🔇 音樂關",1e3)}function Ic(){Ru||(Ru=!0,qe.ctx().resume?.(),Pc(),wc.play(n0(Et)))}addEventListener("pointerdown",Ic);var Zp=!1,Cu=!1;addEventListener("pointerup",()=>setTimeout(()=>{Cu&&Et==="title"&&(Cu=!1,Ci.greet(),qe.ohHi())}));addEventListener("keydown",Ic);var Nt=Jf(Sn),Yt=gp(Sn,Nt,hn),Lc=yp(Qn.domElement),lt=kp(hn),Rr=Vp(Qn,un("#hangar")),Ci=Wp(Sn,Nt,Qn.domElement,()=>Et==="title"),_e=Yt.st;Yt.angel.setWingStage(He.clearedCount());Ci.setWingStage(He.clearedCount());var ji=0,ci=qp(Sn,{onPlayerHit(n){Et==="play"&&Yt.hurt(n)&&(Dp(),qe.tone([180,120],.2,"square",.1,.05),ln.current&&(ln.current.hurt+=n))},onKill(n){ln.onKill(n),qe.tone([660,990],.18,"triangle",.1,.05),bc(`+${n.def.gears}⚙`,n.obj.position,"gear")},onHit(n,e,t){let i=n.def.boss;if(bc(`-${Math.round(e*10)/10}`,n.obj.position,t?"weak":i?"boss":""),Ac=Math.max(Ac,i?t?.07:.035:.012),i){qe.tone(t?[523,784]:[220,330],.12,"square",t?.08:.06,.03);let s=document.getElementById("bossbar");s.classList.remove("hit"),s.offsetWidth,s.classList.add("hit")}else qe.tone([1200],.05,"square",.03)},onGear(n){He.addGears(n),ji+=n,qe.tone([1568],.08,"sine",.06)},onBoss(n){n==="warn"&&lt.toast("大老鷹的眼睛發光了——快閃開！",1400),n==="tired"&&lt.toast("大老鷹撲空喘氣中！快打牠（弱點 ×2）",2200),n==="stagger"&&(lt.banner("重創！","大老鷹暈眩了，傷害 ×2",1800),qe.tone([392,523,659],.25,"triangle",.12,.05)),n==="down"&&(Pu=1.2,lt.banner("擊敗大老鷹！","羽毛滿天飛～",2600))},allies:()=>ln.allies(),pop:(n,e)=>bc(n,e,"combo"),sfx(n,e){n==="shoot"&&(e==="boba"?qe.blup():qe.whoosh(.16,3200,1400,.45)),n==="fan"&&(qe.whoosh(.4,500,2200,.9),qe.tone([196,147],.25,"sawtooth",.05,.03)),n==="halo"&&qe.tone([440,554,659],.32,"triangle",.07,.04),n==="erase"&&(qe.whoosh(.32,700,4200,.7),qe.tone([988,1319],.2,"sine",.08,.06)),n==="key"&&(qe.tone([1046,1568,2093],.3,"square",.07,.015),qe.tone([131],.25,"triangle",.14)),n==="bell"&&(qe.tone([784,1568,2349],1.4,"sine",.12,0),setTimeout(()=>qe.tone([659,1319,1976],1.4,"sine",.12,0),420)),n==="thunder"&&qe.whoosh(.6,400,80)}}),Dc=new me(new Ge(320,24,16),new We({color:4868728,transparent:!0,opacity:.5,side:Bt,depthWrite:!1,fog:!1}));Dc.visible=!1;Sn.add(Dc);var ln=bp(Sn,Nt,ci,{onChest(n){if(n==="gears"){He.addGears(30),ji+=30,lt.toast("寶箱裡是 30 個齒輪！"),qe.treasure();return}let e=He.collect(n);e||(ji+=15),jp(n,e)},onFood(n){let e=He.collect(n);$1(n),e?jp(n,!0):lt.toast(n==="apple"?"金蘋果！血量 +40、金光無敵 5 秒":"魔芋爽！辣到噴火，8 秒內又快又強",1600)},onRing(){lt.complete("ring"),qe.ring(),He.addGears(2),ji+=2,Yt.angel.face.setExpression("happy",1),Yt.fox.face.setExpression("happy",1)},toast:n=>lt.toast(n,2e3),banner:(n,e)=>lt.banner(n,e),onCombo(n,e){n<2||(bc(`連擊 ×${n}`,e.obj.position.clone().add(new A(0,2.5,0)),"combo"),qe.tone([523*Math.pow(1.06,Math.min(n,12))],.12,"triangle",.08),n>=3&&(He.addGears(n),ji+=n))},onBadge(n){lt.banner(`${n.icon} 成就解鎖`,n.name,2e3),qe.treasure()},onBoss(n,e){n==="appear"&&(lt.banner("BOSS","大老鷹出現了！",2800),qe.whoosh(.8,2600,500,.8),Tr={obj:e.obj,t:2.5})},player:()=>_e,onAllyHit(){},weather(n){let e=n==="storm";Dc.visible=e,e?(Sn.fog.color.set(7106454),Sn.fog.near=30,Sn.fog.far=420):Nt.applyFog()}}),s0=70,Tc=new mt;Tc.setAttribute("position",new Rt(new Float32Array(s0*6),3));var Eo=new Aa(Tc,new to({color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!1}));Eo.frustumCulled=!1;Sn.add(Eo);var X1=Array.from({length:s0},()=>({p:new A(1e6,0,0)}));function q1(n){let e=_e.vel.length(),t=Et==="play"&&!_e.grounded&&e>16&&!hn.reducedMotion;if(Eo.material.opacity+=((t?Math.min(.55,(e-16)/40):0)-Eo.material.opacity)*Math.min(1,n*6),Eo.material.opacity<.01)return;let i=_e.vel.clone().normalize(),s=Tc.attributes.position.array,r=Math.min(6,e*.09);X1.forEach((o,c)=>{let a=o.p.clone().sub(_e.pos);if(a.dot(i)<-6||a.length()>45){let l=new A().randomDirection().projectOnPlane(i).normalize().multiplyScalar(4+Math.random()*10);o.p.copy(_e.pos).addScaledVector(i,15+Math.random()*25).add(l)}o.p.addScaledVector(i,-e*.35*n),s.set([o.p.x,o.p.y,o.p.z,o.p.x-i.x*r,o.p.y-i.y*r,o.p.z-i.z*r],c*6)}),Tc.attributes.position.needsUpdate=!0}var Ar=new me(new Ge(1.2,20,14),new We({color:16766556,transparent:!0,opacity:.25,depthWrite:!1,blending:yn}));Ar.visible=!1;Sn.add(Ar);function $1(n){n==="apple"?(_e.hp=Math.min(_e.maxHp,_e.hp+40),_e.invuln=Math.max(_e.invuln,5),_e.gold=5,Yt.angel.face.setExpression("happy",1.5),qe.tone([784,988,1319],.3,"sine",.12,.06)):(_e.spicy=8,Yt.angel.face.setExpression("effort",1.2),qe.whoosh(.5,300,1200))}var bu=0;function Y1(n,e){q1(n),Ar.visible=Et==="play"&&_e.gold>0,Ar.visible&&(Ar.position.copy(_e.pos),Ar.scale.setScalar(1+Math.sin(e*10)*.08)),bu-=n,Et==="play"&&_e.spicy>0&&bu<=0&&(bu=.08,ci.burst(_e.pos.clone().add(new A(0,.4,0)),Math.random()<.5?16734762:16756778,2,3,.9))}var Wt={group:new ae,models:{},id:null,recoil:0};Sn.add(Wt.group);var gc=new A,Kp=new zt;function Z1(n,e){let t=Et==="play"&&!!on;if(Wt.group.visible=t,!t)return;if(Wt.id!==jt){if(Wt.group.clear(),!Wt.models[jt]){let o=xr(jt),c=new tn().setFromObject(o),a=c.getSize(new A);o.scale.setScalar(.55/Math.max(a.x,a.y,a.z)),o.position.sub(c.getCenter(new A).multiplyScalar(o.scale.x));let l=sn(16777215,.9);l.material.opacity=.5;let h=new ae;h.add(o,l),Wt.models[jt]=h}Wt.group.add(Wt.models[jt]),Wt.id=jt,Wt.group.scale.setScalar(1.6)}bn.getWorldDirection(gc);let i=new A().crossVectors(gc,K1).normalize();Wt.recoil=Math.max(0,Wt.recoil-n*8);let s=_e.pos.clone().addScaledVector(i,.85).add(new A(0,1.35+Math.sin(e*2.4)*.06,0)).addScaledVector(gc,-Wt.recoil*.25);Wt.group.position.lerp(s,1-Math.exp(-18*n)),Kp.setFromUnitVectors(new A(0,0,1),gc),Wt.group.quaternion.slerp(Kp,1-Math.exp(-12*n));let r=Wt.group.scale.x+(1+Wt.recoil*.15-Wt.group.scale.x)*(1-Math.exp(-10*n));Wt.group.scale.setScalar(r)}var K1=new A(0,1,0),Tr=null,Ac=0,Pu=0,J1=document.getElementById("pops"),Es=[];function bc(n,e,t=""){let i=document.createElement("b");i.className="pop "+t,i.textContent=n,J1.appendChild(i),Es.push({el:i,pos:e.clone().add(new A((Math.random()-.5)*1.5,1.5,0)),t:0}),Es.length>30&&(Es[0].el.remove(),Es.shift())}var xc=new A;function j1(n){for(let e=Es.length-1;e>=0;e--){let t=Es[e];t.t+=n,t.pos.y+=n*2.5,xc.copy(t.pos).project(bn);let i=xc.z<1;t.el.style.display=i?"block":"none",t.el.style.transform=`translate(${(xc.x*.5+.5)*innerWidth}px, ${(-xc.y*.5+.5)*innerHeight}px) translate(-50%, -50%) scale(${1+Math.max(0,.25-t.t)*2})`,t.el.style.opacity=String(Math.min(1,2.2-t.t*2.2)),t.t>1&&(t.el.remove(),Es.splice(e,1))}}var Q1=0;function eM(n){if(!Tr)return;if(Tr.t-=n,Tr.t<=0||Math.abs(En.mouse?.dx||0)+Math.abs(En.mouse?.dy||0)>2){Tr=null;return}let e=Tr.obj.position.clone().sub(_e.pos),t=Math.atan2(-e.x,-e.z)-_e.camYaw;t=Math.atan2(Math.sin(t),Math.cos(t));let i=1-Math.exp(-5*n);_e.camYaw+=t*i;let s=Dt.clamp(.22-Math.atan2(e.y,Math.hypot(e.x,e.z))*.7,-.35,.9);_e.camPitch+=(s-_e.camPitch)*i}var jt="boba",Lu=()=>on?.weapons||He.weaponsOwned();function r0(n){let e=Lu();!e[n]||e[n]===jt||(jt=e[n],lt.toast(`武器：${Rn(jt).name}（${rc[jt]}）`,1400),qe.swap())}function tM(){let n=Lu();r0((n.indexOf(jt)+1)%n.length)}var Su=new A,Rc=new A;function nM(){if(bn.getWorldDirection(Su),Rc.copy(_e.pos).add(new A(0,.6,0)).addScaledVector(Su,1.2),ci.fire(jt,Rc,Su,n=>He.weaponStat(jt,n)*(n==="damage"&&_e.spicy>0?1.5:1),_e.vel)){lt.complete("shoot"),Wt.recoil=1,_e.shake=Math.max(_e.shake||0,{boba:.012,key:.06,bell:.08,fan:.04}[jt]||.025);let n=document.querySelector(`#weapon .wslot[data-w="${jt}"]`);n&&(n.classList.remove("fire"),n.offsetWidth,n.classList.add("fire"))}}var rn=$a();rn.setPose(Zi("boba",rn).drink);rn.snap();rn.root.position.set(1.2,Nt.home.top+rn.meta.standHeight,-5.2);Sn.add(rn.root);var Jp=["歡迎光臨奶茶站！今天也要飛很遠嗎？","聽說「渦輪掃把」要先飛快一點才浮得起來喔。","寶箱裡的零件，拿到設計圖鑑就能升級！","你看遠方那座雲城堡……最近好像怪怪的。","飛累了就回來，站在島上會慢慢充電。"],wu=0,yc=!1,vc=0,iM=new A,Ut={active:!1,next:0,total:Nt.rings.length,time:0,best:null};try{Ut.best=Number(localStorage.getItem("sky.best"))||null}catch{}var Cc=new A;function o0(){Ut.active=!1,Ut.next=0,Ut.time=0,Nt.rings.forEach(n=>{n.passed=!1,n.torus.material.color.set(16766556)})}function sM(n,e){Ut.active&&(Ut.time+=n),Nt.rings.forEach((r,o)=>{r.sp.material.opacity=o===Ut.next?.55+Math.sin(e*5)*.25:0});let t=Nt.rings[Ut.next],i=Cc.clone().sub(t.pos).dot(t.normal),s=_e.pos.clone().sub(t.pos).dot(t.normal);if(i*s<=0&&i!==s&&Cc.clone().lerp(_e.pos,i/(i-s)).distanceTo(t.pos)<4.6&&(t.torus.material.color.set(8368895),Ut.next===0&&(Ut.active=!0,Ut.time=0),Ut.next++,qe.ring(),Ut.next>=Ut.total)){let r=Ut.best?Math.min(Ut.best,Ut.time):Ut.time;lt.toast(`完成光圈賽道！${dc(Ut.time)}${r===Ut.time?"　新紀錄！":""}`,4e3);try{localStorage.setItem("sky.best",String(r))}catch{}o0(),Ut.best=r}}var on=null;function an(n){Et=n,document.body.dataset.mode=n,Ru&&(wc.play(n0(n)),wc.setDuck(n==="paused"||n==="book")),n==="play"&&lt.refreshHint()}an("title");function Cr(){qe.ctx().resume?.(),Lc.lock()}function Pi(){document.pointerLockElement&&document.exitPointerLock(),ln.stop(),on=null,Nt.rings.forEach(n=>n.g.visible=!1),Ap(n=>{on=n,vu(n),an("intro")}),_e.allowed=He.modulesUnlocked(),Yt.reset(Nt.spawn,!0,0),an("map")}function Uc(n){on=n,ji=0;let e=ln.start(n),t=He.modulesUnlocked();t[n.tool]=!0,_e.allowed=t,Yt.reset(e.spawn,e.grounded,n.tool),_e.extraDrafts=e.state.extraDrafts,e.grounded||_e.vel.set(0,0,-12),_e.camYaw=0,Nt.rings.forEach(s=>s.g.visible=!1),jt=n.weapons[0],an("play"),Cr();let i={5:"護送目標：雲鯨，別讓海盜抓走牠！",6:"先摧毀 4 座砲台"}[n.n]||n.goal;if(lt.banner(`STAGE ${n.n}　${n.name}`,i,2600),n.n===5&&e.state.whale){let s=e.state.whale.position.clone().sub(_e.pos);_e.camYaw=Math.atan2(-s.x,-s.z)}}function a0(){on=null,ln.stop(),_e.allowed=He.modulesUnlocked(),_e.extraDrafts=[],Yt.reset(Nt.spawn,!0,0),Nt.rings.forEach(n=>n.g.visible=!0),o0(),an("play"),Cr()}var Sc=null;function jp(n,e){document.pointerLockElement&&document.exitPointerLock(),Mu(n,e),qe.treasure(),an("card")}un("#c-ok").onclick=()=>{if(Rp(),Sc){let n=Sc;Sc=null,c0(n);return}an("play"),Cr()};function Qp(n){document.pointerLockElement&&document.exitPointerLock();let e=on,t=ln.current,i=null,s=!1;if(n){i=ln.result(_e.hp/_e.maxHp);let o=i.stars*20;He.addGears(o),ji+=o;let c=He.clearedCount();s=He.finishLevel(e.n,i),i.newBadges=He.addBadges(e.n,i.badges);let a=He.clearedCount();a>c&&(Yt.angel.setWingStage(a,!0),Ci.setWingStage(a),i.wingUp={stage:a,name:_s[a].name})}let r={win:n,level:e,res:i,gearsEarned:ji,newBest:s,failReason:t?.failReason};if(n&&e.reward){let o=He.collect(e.reward);Sc=r,Mu(e.reward,o),an("card");return}c0(r)}function c0(n){let e=n.level,t=vo.find(s=>s.n===e.n+1),i=[];n.win&&t&&i.push(["下一關："+t.name,()=>{on=t,vu(t),an("intro")},!0]),n.win&&!t&&i.push(["全部破關！回地圖看總分",Pi,!0]),n.win||i.push(["再試一次",()=>Uc(e),!0]),i.push(["設計圖鑑・升級",()=>Pr()]),i.push(["關卡地圖",Pi]),ln.stop(),Cp(n,i),n.win?qe.clear():qe.soft(),an("result")}var Iu={angel:{src:"assets/angel.webp",crop:[.5,0,.97,.47],name:"天使高中生（主角）",note:"銀白長髮、琥珀色眼睛、會滴落的蜂蜜光環、鈷藍 polo 制服——遊戲主角與六種飛行模組的配色都從這張畫來。"},fox:{src:"assets/fox.webp",crop:[.05,.02,.98,.98],name:"狐狸隊友",note:"Q 版狐娘，紅色旗袍＋紅黑摺扇。遊戲裡跟著主角飛，騎天空腳踏車時坐後座；旗袍紅也成了所有安全件的顏色。"},boba:{src:"assets/boba.webp",crop:[.08,0,.95,.9],name:"奶茶店朋友",note:"喝珍奶的女孩，粉色花髮夾與淡藍側馬尾。遊戲裡是奶茶站的老闆，第一把武器「珍奶加特林」就是她改裝的。"}};function rM(n){let e=Iu[n];return new Promise(t=>{let i=new Image;i.onload=()=>{let[s,r,o,c]=e.crop,a=i.naturalWidth*(o-s),l=i.naturalHeight*(c-r),h=document.createElement("canvas");h.width=Math.round(a),h.height=Math.round(l),h.getContext("2d").drawImage(i,i.naturalWidth*s,i.naturalHeight*r,a,l,0,0,a,l),t(h.toDataURL("image/webp",.9))},i.src=e.src})}var bo=un("#lightbox");document.querySelectorAll(".thumb").forEach(async n=>{let e=n.dataset.art,t=await rM(e);n.querySelector("img").src=t,n.onclick=()=>{bo.querySelector("img").src=t,bo.querySelector("figcaption").innerHTML=`<b>${Iu[e].name}</b>${Iu[e].note}`,bo.hidden=!1}});bo.onclick=()=>bo.hidden=!0;var Tu=["day","sunset","night"];function Du(n){hn.sky=n,fc(hn),Nt.setSky(n),document.body.dataset.sky=n,document.querySelectorAll("#skymode button").forEach(e=>e.classList.toggle("on",e.dataset.sky===n))}document.querySelectorAll("#skymode button").forEach(n=>n.onclick=()=>Du(n.dataset.sky));addEventListener("keydown",n=>{if(n.code==="KeyN"&&!n.metaKey&&!n.ctrlKey){let e=Tu[(Tu.indexOf(hn.sky)+1)%Tu.length];Du(e),Et==="play"&&lt.toast(`切換成${{day:"白天 ☀️",sunset:"黃昏 🌇",night:"夜晚 🌙"}[e]}`,1200)}});Du(hn.sky||"sunset");un("#btn-start").onclick=()=>{qe.ctx().resume?.(),Pi()};un("#btn-book").onclick=()=>Pr(1);un("#map-back").onclick=()=>an("title");un("#map-book").onclick=()=>Pr(1);un("#map-free").onclick=a0;un("#map-review").onchange=n=>{He.setReview(n.target.checked),Yt.angel.setWingStage(He.clearedCount()),Ci.setWingStage(He.clearedCount()),Pi()};un("#i-back").onclick=Pi;un("#i-go").onclick=()=>Uc(on);un("#btn-resume").onclick=()=>{an("play"),Cr()};un("#btn-book2").onclick=()=>Pr();un("#btn-retry").onclick=()=>on?Uc(on):a0();un("#btn-map").onclick=Pi;un("#btn-tutorial").onclick=()=>{lt.resetTutorial(),an("play"),Cr()};un("#btn-wipe").onclick=()=>{confirm("確定要清除所有進度嗎？（寶物、齒輪、分數都會歸零）")&&(He.reset(),Yt.angel.setWingStage(0),Ci.setWingStage(0),Pi())};Qn.domElement.addEventListener("contextmenu",n=>n.preventDefault());Qn.domElement.addEventListener("click",()=>{Et==="play"&&!Lc.mouse.locked&&Cr()});Op(hn,Pc);document.getElementById("music-toggle").onclick=n=>{n.stopPropagation(),Ic(),i0()};addEventListener("keydown",n=>{n.code==="KeyM"&&!n.metaKey&&!n.ctrlKey&&(Ic(),i0())});Pc();document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&Et==="play"&&an("paused")});function Pr(n){let e=Et;document.pointerLockElement&&document.exitPointerLock(),an("book"),Rr.open(n??_e.tool+1),lt.complete("book"),Rr.onclose=()=>{e==="map"?Pi():an(e==="title"||e==="result"?e:"paused")}}addEventListener("keydown",n=>{n.code==="Tab"&&(n.preventDefault(),Et==="book"?Rr.close():["play","paused","map","result"].includes(Et)&&Pr()),n.code==="Escape"&&Et==="book"&&Rr.close()});var oM=new Fa,e0=0,Au=0;function l0(){Qn.setSize(innerWidth,innerHeight),bn.aspect=Math.max(1,innerWidth)/Math.max(1,innerHeight),bn.updateProjectionMatrix()}addEventListener("resize",l0);l0();var aM={pressed:()=>!1,held:()=>!1,axis:()=>0,mouse:{dx:0,dy:0,wheel:0}},t0=0,En=Lc;function h0(n,e=!0){Ac>0?(Ac-=n,n*=.12):Pu>0&&(Pu-=n,n*=.35),t0+=n;let t=t0;if(co.uTime.value=t,Et==="book"){e&&Rr.render(n,t),En.endFrame?.();return}if(Nt.update(t,bn,n),Et==="play"){if(Cc.copy(_e.pos),Yt.update(n,t,En),eM(n),(En.pressed("KeyR")||En.pressed("Mouse2"))&&tM(),["KeyZ","KeyX","KeyV"].forEach((o,c)=>{En.pressed(o)&&r0(c)}),En.held("Mouse0")&&nM(),ci.update(n,t,_e),on){ln.update(n,t,_e,Cc,c=>He.has(c));let o=ln.current;o?.done?Qp(!0):(_e.hp<=0||o?.failed)&&Qp(!1)}else sM(n,t);e0+=Math.abs(En.mouse.dx)+Math.abs(En.mouse.dy),e0>400&&lt.complete("look"),!_e.grounded&&_e.speed>8&&(Au+=n),Au>1&&lt.complete("forward"),!_e.grounded&&(En.held("Space")||En.held("KeyC"))&&Au>0&&lt.complete("vertical"),En.held("ShiftLeft")&&_e.speed>10&&lt.complete("sprint");for(let o of _e.events){if(o.type==="takeoff"&&(lt.complete("takeoff"),qe.whoosh(.5,600,1600)),o.type==="swap"&&(lt.complete("swap"),qe.swap(),lt.toast(`${Ye[o.tool].code} ${Ye[o.tool].name}・${Ye[o.tool].tagline}`,1800)),o.type==="locked"&&lt.toast(`${Ye[o.tool].code} ${Ye[o.tool].name} 還沒解鎖（第 ${o.tool+1} 關）`,1600),["dash","flap","brake"].includes(o.type)&&(lt.complete("special"),qe.whoosh(.35)),o.type==="respawn"&&(lt.toast(o.msg,3e3),qe.soft()),o.type==="wingbeat"){++Q1%2===0&&qe.whoosh(.18,900,400,.1);let c=new A(-Math.sin(_e.heading),-.2,-Math.cos(_e.heading));for(let a of[-1,1]){let l=new A(Math.cos(_e.heading),0,-Math.sin(_e.heading)).multiplyScalar(a*1.1);ci.burst(_e.pos.clone().add(l).addScaledVector(c,.8).add(new A(0,.6,0)),16777215,1,3,.6)}}o.type==="updraft"&&lt.toast("上升氣流！雨傘和翅膀在這裡特別好飛",1500)}_e.events.length=0}else Et==="result"?Yt.angel.update(n,t,{wingAmp:.3,wingRate:6}):["card","result","paused"].includes(Et)||(Yt.update(n,t,aM),_e.events.length=0);let i=_e.pos.distanceTo(rn.root.position);i<4.5&&_e.grounded&&Et==="play"&&!on?(yc||(wu=(wu+1)%Jp.length,qe.soft(),vc=2.4,rn.face.setExpression("happy",.8)),yc=!0,lt.talk(!0,Jp[wu])):yc&&(yc=!1,lt.talk(!1)),rn.root.rotation.y=i<8?Math.atan2(_e.pos.x-rn.root.position.x,_e.pos.z-rn.root.position.z):0,vc=Math.max(0,vc-n),rn.face.talking=vc>0,i<12?rn.lookAtPoint(Yt.angel.J.head.getWorldPosition(iM)):rn.lookAt(0,-.1),rn.root.position.set(Nt.home.x+1.2,Nt.home.top+rn.meta.standHeight,Nt.home.z-5.2),rn.update(n,t,{});let s=on?ln.current?.marker:Nt.rings[Ut.next]?.pos;_e.lookTarget=i<6&&_e.grounded?rn.J.head.getWorldPosition(new A):!_e.grounded&&s&&_e.pos.distanceTo(s)<160?s:null,Et!=="play"&&(Wt.group.visible=!1);let r=Et==="title";Ci.visible=r,Yt.fox.root.visible=!r,Yt.angel.root.visible=!r&&!(Et==="play"&&_e.invuln>0&&!_e.gold&&Math.floor(t*20)%2),r?(!Zp&&t>.6&&(Zp=!0,Ci.greet(),qe.ctx().state==="running"?qe.ohHi():Cu=!0),Ci.update(n,t,bn)):Et==="map"?(bn.position.set(Math.sin(t*.05)*40,Nt.home.top+22,Math.cos(t*.05)*40),bn.lookAt(0,Nt.home.top+4,0)):xp(bn,_e,n,hn),Dc.position.copy(bn.position),Et==="play"&&(lt.hud(_e,on?{active:!1}:Ut),Pp(on?ln.objective():null,_e,ln.current),Lp(Lu(),jt,Math.min(1,ci.cooldown*He.weaponStat(jt,"rate"))),s?dM(s):lt.marker(null),lM(),j1(n),Z1(n,t),uM()),Y1(n,t),e&&Qn.render(Sn,bn),En.endFrame?.()}Qn.setAnimationLoop(()=>h0(Math.min(oM.getDelta(),.05)));var u0=document.getElementById("radar"),cM=u0.getContext("2d"),Mo=160;function lM(){let n=u0.width,e=n/2-8,t=cM;t.clearRect(0,0,n,n),t.save(),t.translate(n/2,n/2),t.fillStyle="rgba(255,255,255,.72)",t.beginPath(),t.arc(0,0,e+6,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(79,108,240,.25)",t.lineWidth=2;for(let l of[.33,.66,1])t.beginPath(),t.arc(0,0,e*l,0,Math.PI*2),t.stroke();t.fillStyle="rgba(79,108,240,.12)",t.beginPath(),t.moveTo(0,0),t.arc(0,0,e,-Math.PI/2-.5,-Math.PI/2+.5),t.fill();let i=-Math.sin(_e.camYaw),s=-Math.cos(_e.camYaw),r=(l,h)=>{let f=l.x-_e.pos.x,u=l.z-_e.pos.z,d=f*-s+u*i,m=-(f*i+u*s),x=Math.hypot(d,m)/Mo*e;if(x>e){if(!h)return null;let g=e/x;return[d/Mo*e*g,m/Mo*e*g,!0]}return[d/Mo*e,m/Mo*e,!1]},o=(l,h,f,u,d)=>{let m=r(l,u);if(m){if(t.fillStyle=h,t.beginPath(),d==="square")t.rect(m[0]-f,m[1]-f,f*2,f*2);else if(d==="star")for(let x=0;x<10;x++){let g=x/10*Math.PI*2-Math.PI/2,p=x%2?f*.45:f;t.lineTo(m[0]+Math.cos(g)*p,m[1]+Math.sin(g)*p)}else t.arc(m[0],m[1],f,0,Math.PI*2);t.fill()}},c=ln.current;if(c){for(let l of c.state.foods)o(l.g.position,l.id==="apple"?"#e0a92a":"#e2552f",3.5);for(let l of c.chests)l.opened||o(l.m.position,"#f0b429",6,!0,"square");c.state.whale&&o(c.state.whale.position,"#43b581",9,!0)}for(let l of ci.alive())o(l.obj.position,"#d8443f",l.def.boss?10:5,l.def.boss);let a=on?c?.marker:Nt.rings[Ut.next]?.pos;a&&o(a,"#4f6cf0",10,!0,"star"),t.fillStyle="#232838",t.beginPath(),t.moveTo(0,-9),t.lineTo(7,7),t.lineTo(-7,7),t.closePath(),t.fill(),t.restore()}var hM=document.getElementById("enemy-arrows"),_c=Array.from({length:6},()=>{let n=document.createElement("i");return hM.appendChild(n),n}),Mc=new A;function uM(){let n=innerWidth,e=innerHeight,t=ci.alive().filter(s=>s.obj.position.distanceTo(_e.pos)<140).sort((s,r)=>s.obj.position.distanceTo(_e.pos)-r.obj.position.distanceTo(_e.pos)),i=0;for(let s of t){if(i>=_c.length)break;Mc.copy(s.obj.position).project(bn);let r=Mc.z>1,o=(Mc.x*.5+.5)*n,c=(-Mc.y*.5+.5)*e;if(!r&&o>30&&o<n-30&&c>30&&c<e-30)continue;let a=o-n/2,l=c-e/2;r&&(a=-a,l=-l);let h=Math.atan2(l,a),f=Math.min((n/2-34)/Math.abs(Math.cos(h)||.001),(e/2-34)/Math.abs(Math.sin(h)||.001)),u=_c[i++];u.style.display="block",u.style.transform=`translate(${n/2+Math.cos(h)*f}px, ${e/2+Math.sin(h)*f}px) rotate(${h}rad)${s.def.boss?" scale(1.6)":""}`}for(;i<_c.length;i++)_c[i].style.display="none"}var Ec=new A;function dM(n){Ec.copy(n).project(bn);let e=innerWidth,t=innerHeight,i=Ec.z>1,s=(Ec.x*.5+.5)*e,r=(-Ec.y*.5+.5)*t,o=!i&&s>40&&s<e-40&&r>40&&r<t-40,c=0;if(!o){let a=s-e/2,l=r-t/2;i&&(a=-a,l=-l),c=Math.atan2(l,a);let h=Math.min((e/2-50)/Math.abs(Math.cos(c)||.001),(t/2-50)/Math.abs(Math.sin(c)||.001));s=e/2+Math.cos(c)*h,r=t/2+Math.sin(c)*h}lt.marker(s,r,o,_e.pos.distanceTo(n),c)}function fM(n,e=jt){return Rc.copy(_e.pos).add(new A(0,.6,0)).addScaledVector(n,1.2),ci.fire(e,Rc,n,t=>He.weaponStat(e,t)*(t==="damage"&&_e.spicy>0?1.5:1),_e.vel)}window.__game={cover:Ci,renderer:Qn,scene:Sn,frame:h0,fireAt:fM,setInput:n=>En=n||Lc,openBook:Pr,goMap:Pi,player:Yt,world:Nt,cam:bn,setMode:an,hangar:Rr,runner:ln,combat:ci,progress:He,startLevel:Uc,LEVELS:vo,get mode(){return Et}};
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */

