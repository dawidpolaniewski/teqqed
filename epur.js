var passwordInput = document.getElementById("password");
var errorMessage = document.getElementById("error-message");

function redirectToSuccessPage() {
    var passwordValue = passwordInput.value;

    var reports = {
      "dZR_E4{AZ}": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20dZR_E4%7BAZ%7D.pdf",
      "<Rrx2t\@8;": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%3CRrx2t@8%3B.pdf",
      "#LA;gWKnK8": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%23LA%3BgWKnK8.pdf",
      "K(8cnK>?%b": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20K(8cnK%3E%3F%25b.pdf",
      "VyR7R[S\PS": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20VyR7R%5BSPS.pdf",
      "v(U,WJV!/P": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20v(U%2cWJV!P.pdf",
      "AcvPu[]JUb": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20AcvPu%5B%5DJUb.pdf",
      "@Qs?US8vK^": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20@Qs%3FUS8vK%5E.pdf",
      "D9^Rd!NaoB": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20D9%5ERd!NaoB.pdf",
      "7:5/bz^7(D": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%207-5bz%5E7(D.pdf",
      "B!m#Vh>Kma": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20B!m%23Vh%3EKma.pdf",
      "JGAMd8@>#G": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20JGAMd8@%3E%23G.pdf",
      "ep%z!%J%*m": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20ep%25z!%25J%25*m.pdf",
      "fa2/\pj#aY": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20fa2pj%23aY.pdf",
      "HhNK#5\RM_": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20HhNK%235RM_.pdf",
      "^9fMT!pazk": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%5E9fMT!pazk.pdf",
      "62CVUvjAKR": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%2062CVUvjAKR.pdf",
      "JTbj8n_}nn": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20J6n7QaDc%23%7B.pdf",
      "hchQL/dEVw": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20hchQLdEVw.pdf",
      "5].<pQ.^yM": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%205%5D.%3CpQ.%5EyM.pdf",
      "58<J\w8*4>": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%2058%3CJw8*4%3E.pdf",
      "DFL.Ys{d!b": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20DFL.Ys%7Bd!b.pdf",
      "K$4u{9pN?m": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20K$4u%7B9pN%3Fm.pdf",
      "J6n7QaDc#{": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20J6n7QaDc%23%7B.pdf",
      "[c68V()Ea2": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%5Bc68V()Ea2.pdf",
      "j2Z[*;#u!A": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20j2Z%5B*%3B%23u!A.pdf",
      "?y@;.#Jg$r": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%3Fy@%3B.%23Jg$r.pdf",
      "DJTPBQ;$hw": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20DJTPBQ%3B$hw.pdf",
      "S[VBL2MaSB": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20S%5BVBL2MaSB.pdf",
      "7Ke^eNR{tH": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%207Ke%5EeNR%7BtH.pdf",
      "*:\Wy\vf(q": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20*-Wyvf(q.pdf",
      "657}T8h(_j": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20657%7DT8h(_j.pdf",
      "Hhfgmtb}/P": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20Hhfgmtb%7DP.pdf",
      "kQWa{ky^_x": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20kQWa%7Bky%5E_x.pdf",
      "#({xj>SqQh": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%23(%7Bxj%3ESqQh.pdf",
      "\VYB68u6cP": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20VYB68u6cP.pdf",
      "uLq}bmdd)6": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20uLq%7Dbmdd)6.pdf",
      "{?o8XJ^La.": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%7B%3Fo8XJ%5ELa..pdf",
      "CcvYg!c>tE": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20CcvYg!c%3EtE.pdf",
      "t<9x!KU.qX": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20t%3C9x!KU.qX.pdf",
      "{MPfN[Gc:H": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%7BMPfN%5BGc-H.pdf",
      "RuNf;<{P\3": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20RuNf%3B%3C%7BP3.pdf",
      "7!Bmo[m:]r": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%207!Bmo%5Bm-%5Dr.pdf",
      "7Hahs!qTFd": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%207Hahs!qTFd.pdf",
      "D(WtsB\UST": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20D(WtsBUST.pdf",
      ".C%_3[m<bW": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20.C%25_3%5Bm%3CbW.pdf",
      "a>r#yeyUp,": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20a%3Er%23yeyUp%2c.pdf",
      "B{*H}km(rS": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20B%7B*H%7Dkm(rS.pdf",
      "6Y?a58@CT?": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%206Y%3Fa58@CT%3F.pdf",
      "$mN!FRatp6": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20$mN!FRatp6.pdf",
      "MQg2Yy\qCx": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20MQg2YyqCx.pdf",
      "b45\gD_Y.8": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20b45gD_Y.8.pdf",
      "pYz5T];N@J": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20pYz5T%5D%3BN@J.pdf",
      "4BHerVQhRe": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%204BHerVQhRe.pdf",
      "9^SB>(E]xR": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%209%5ESB%3E(E%5DxR.pdf",
      "<mECMh{NL2": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%3CmECMh%7BNL2.pdf",
      ",yU}Jvz7C!": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%2cyU%7DJvz7C!.pdf",
      "]qQUp@.qP\": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%5DqQUp@.qP.pdf",
      "!$A.^>qJ[q": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20!$A.%5E%3EqJ%5Bq.pdf",
      "Q:VRX^sqws": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20Q-VRX%5Esqws.pdf",
      "tPCRf.WPh3": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20tPCRf.WPh3.pdf",
      ",WEDBza:!U": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%2cWEDBza-!U.pdf",
      "(N8m@fBSSZ": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20(N8m@fBSSZ.pdf",
      "T2qP8bnFbR": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20T2qP8bnFbR.pdf",
      "}9>b^JT_}]": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%7D9%3Eb%5EJT_%7D%5D.pdf",
      "6}\t@XpECq": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%206%7Dt@XpECq.pdf",
      "%$*@ddEB^4": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%25$*@ddEB%5E4.pdf",
      "v4ZmrV>G.}": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20v4ZmrV%3EG.%7D.pdf",
      "PK@/<6%>a*": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20PK@%3C6%25%3Ea*.pdf",
      "]YXbeakAAb": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%5DYXbeakAAb.pdf",
      "Z:_@M!*cYK": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20Z-_@M!*cYK.pdf",
      "hL#6fXK2H<": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20hL%236fXK2H%3C.pdf",
      "cUTC55,zmN": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20cUTC55%2czmN.pdf",
      "j/^VD;K/3)": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20BtH4TAju8m.pdf",
      "D?RUt7:V\[": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20D%3FRUt7-V%5B.pdf",
      "BtH4TAju8m": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20BtH4TAju8m.pdf",
      "Hq9C{)R^hW": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20Hq9C%7B)R%5EhW.pdf",
      "qGLZdZj}K:": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20qGLZdZj%7DK-.pdf",
      "UC:8^:)tGY": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20UC-8%5E-)tGY.pdf",
      "w[>eku@6w?": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20w%5B%3Eeku@6w%3F.pdf",
      "\Nk]NGaw;p": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20Nk%5DNGaw%3Bp.pdf",
      ",Z(WV*K395": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%2cZ(WV*K395.pdf",
      "C5?EePG6mN": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20C5%3FEePG6mN.pdf",
      "d@DKXPVp;.": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20d@DKXPVp%3B..pdf",
      "!dqYPCkh:s": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20!dqYPCkh-s.pdf",
      "<2<;3h,oFt": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%3C2%3C%3B3h%2coFt.pdf",
      "yMTVLJ;@]c": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20yMTVLJ%3B@%5Dc.pdf",
      "updq}d5K>{": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20updq%7Dd5K%3E%7B.pdf",
      "H;/SK?KstB": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20H%3BSK%3FKstB.pdf",
      "$Z,!CD!6\y": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20$Z%2c!CD!6y.pdf",
      "yKwJ.[,A)#": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20yKwJ.%5B%2cA)%23.pdf",
      "eUU<F)N$$R": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20eUU%3CF)N$$R.pdf",
      "@q7b:$fUnS": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20@q7b-$fUnS.pdf",
      "osUcot.N;z": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20osUcot.N%3Bz.pdf",
      "gFM[5VMYE)": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20gFM%5B5VMYE).pdf",
      "K7Qgd6fENQ": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20K7Qgd6fENQ.pdf",
      "Dcfh3pVY?}": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%203$h8%7DHbpo(.pdf",
      "Lr68TaZT@G": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20Lr68TaZT@G.pdf",
      "3$h8}Hbpo(": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%203$h8%7DHbpo(.pdf",
      "Q;88#Z)WLY": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20Q%3B88%23Z)WLY.pdf",
      "Z[q*a,HBm/": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20Z%5Bq*a%2cHBm.pdf",
    };

    if (passwordValue in reports) {
        var url = "epur-results-success";
        url += "?report=" + passwordValue;
        window.location.href = url;
    } else {
        errorMessage.style.display = "block";
        passwordInput.classList.add("invalid");
    }
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    redirectToSuccessPage();
});

passwordInput.addEventListener("input", function() {
    if (this.classList.contains("invalid")) {
        errorMessage.style.display = "none";
        this.classList.remove("invalid");
    }
});
