(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e3287bd"],{"46f2":function(t,e,a){},"55a7":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var c=a("83fc"),s=a("41cb"),i=a("8a4e"),r=a("2b20");class o{async getAllObjectives(t){try{const e=await r["a"].get("api/quests/"+t+"/objectives");c["a"].objectives=e.data}catch(e){i["logger"].error(e)}}async getObjective(t){const e=await r["a"].get("api/objectives/"+t.id);c["a"].activeObjective=e.data}async submitAnswer(t,e){const a=await r["a"].get("api/objectives/"+t.objectiveId+"/answers"),c=a.data,o=c.filter(t=>t.creatorId===e._id);o.length<1?(await r["a"].post("api/answers",t),s["a"].push({name:"MapPage",params:t.questId}),i["logger"].log(t)):(window.alert("You have already submitted an answer"),s["a"].push({name:"MapPage",params:t.questId}))}async getAnswers(t){const e=await r["a"].get("api/objectives/"+t.id+"/answers"),a=e.data,s=a.filter(t=>t.creatorId===c["a"].account);i["logger"].log("this should be the account id we check",c["a"].account),s.length>0?c["a"].status=!0:c["a"].status=!1}async getMarkers(t){const e=await r["a"].get("api/quests/"+t+"/objectives");i["logger"].log("this is the objectives/markers",e.data),c["a"].markers=e.data,this.formatMarkerInfo()}formatMarkerInfo(){return c["a"].markers.forEach(t=>{const e={};e.lat=t.location.lat,e.lng=t.location.lng,e.address=t.location.address,e.title=t.title,e.objectiveId=t.id,c["a"].markerInfo.push(e),i["logger"].log("this is the formatted",c["a"].markerInfo)}),c["a"].markerInfo}}const n=new o},"94a7":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const s=Object(c["I"])("data-v-97c960ba");Object(c["u"])("data-v-97c960ba");const i={class:"ObjectiveDetailsPage container-fluid bg font"},r={class:"row"},o={class:"col text-center m-2"},n={class:"row justify-content-center"},b={class:"col"},d={class:"card mt-1 text-left custom"},l={class:"card-body"},u={class:"card-text"},j={class:"row justify-content-center my-4"},m={class:"form-group mx-sm-3 mb-2 my-4"},v=Object(c["h"])("button",{type:"submit",class:"btn btn-primary mb-2 my-4","data-toggle":"modal","data-target":"#ObjectiveCreationModal"}," Send Answer ",-1),w=Object(c["h"])("div",{class:"row"},[Object(c["h"])("div",{class:"col"})],-1);Object(c["s"])();const g=s((t,e,a,s,g,h)=>(Object(c["r"])(),Object(c["e"])("div",i,[Object(c["h"])("div",r,[Object(c["h"])("div",o,[Object(c["h"])("h2",null,Object(c["B"])(s.state.objective.title),1)])]),Object(c["h"])("div",n,[Object(c["h"])("div",b,[Object(c["h"])("div",d,[Object(c["h"])("div",l,[Object(c["h"])("p",u,Object(c["B"])(s.state.objective.body),1)])])])]),Object(c["h"])("div",j,[Object(c["h"])("form",{class:"form-inline",onSubmit:e[2]||(e[2]=Object(c["H"])((...t)=>s.submitAnswer&&s.submitAnswer(...t),["prevent"]))},[Object(c["h"])("div",m,[Object(c["G"])(Object(c["h"])("input",{type:"text",class:"form-control",id:"inputPassword2","onUpdate:modelValue":e[1]||(e[1]=t=>s.state.answer.body=t),placeholder:"submit Answer"},null,512),[[c["D"],s.state.answer.body]])]),v],32)]),w])));var h=a("6c02"),O=a("8a4e"),p=a("55a7"),f=a("83fc"),y={name:"ObjectiveDetailsPage",setup(){const t=Object(h["c"])(),e=Object(c["v"])({objectiveId:{id:t.params.id},objective:Object(c["c"])(()=>f["a"].activeObjective),status:Object(c["c"])(()=>f["a"].status),account:Object(c["c"])(()=>f["a"].account),answer:{isSubmitted:!0,objectiveId:t.params.id,questId:t.params.questid}});return Object(c["p"])(async()=>{try{await p["a"].getObjective(e.objectiveId)}catch{}}),{state:e,async submitAnswer(){try{await p["a"].submitAnswer(e.answer,e.account),e.answer={isSubmitted:!0,objectiveId:t.params.id}}catch(a){O["logger"].error(a)}}}}};a("c53c");y.render=g,y.__scopeId="data-v-97c960ba";e["default"]=y},c53c:function(t,e,a){"use strict";a("46f2")}}]);