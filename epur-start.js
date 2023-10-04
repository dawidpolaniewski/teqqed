var passwordInput = document.getElementById("password");
var errorMessage = document.getElementById("error-message");

function redirectToSuccessPage() {
    var passwordValue = passwordInput.value;

    var reports = {
"dZRiE4yAZu": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20dZR_E4%7BAZ%7D.pdf",
"pRrx2t@8": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%3CRrx2t@8%3B.pdf",
"LAgWKnK8": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%23LA%3BgWKnK8.pdf",
"Kg8cnKs?b": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20K(8cnK%3E%3F%25b.pdf",
"VyR7RSPS": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20VyR7R%5BSPS.pdf",
"vgUrWJV!P": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20v(U%2cWJV!P.pdf",
"AcvPuqwJUb": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20AcvPu%5B%5DJUb.pdf",
"@Qs?US8vKf": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20@Qs%3FUS8vK%5E.pdf",
"D9fRd!NaoB": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20D9%5ERd!NaoB.pdf",
"75bzf7D": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%207-5bz%5E7(D.pdf",
"B!mVhsKma": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20B!m%23Vh%3EKma.pdf",
"JGAMd8@sG": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20JGAMd8@%3E%23G.pdf",
"epz!Jm": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20ep%25z!%25J%25*m.pdf",
"fa2pjaY": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20fa2pj%23aY.pdf",
"HhNK5RMi": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20HhNK%235RM_.pdf",
"f9fMT!pazk": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%5E9fMT!pazk.pdf",
"62CVUvjAKR": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%2062CVUvjAKR.pdf",
"JTbj8nnn": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20J6n7QaDc%23%7B.pdf",
"hchQLdEVw": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20hchQLdEVw.pdf",
"5ppQfyM": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%205%5D.%3CpQ.%5EyM.pdf",
"58pJw84s": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%2058%3CJw8*4%3E.pdf",
"DFLYsd!b": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20DFL.Ys%7Bd!b.pdf",
"K$4u9pN?m": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20K$4u%7B9pN%3Fm.pdf",
"J6n7QaDc": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/2%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20J6n7QaDc%23%7B.pdf",
"c68VEa2": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%5Bc68V()Ea2.pdf",
"j2Zu!A": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20j2Z%5B*%3B%23u!A.pdf",
"yJg$r": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%3Fy@%3B.%23Jg$r.pdf",
"DJTPBQ$hw": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20DJTPBQ%3B$hw.pdf",
"SVBL2MaSB": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20S%5BVBL2MaSB.pdf",
"7KefeNRtH": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%207Ke%5EeNR%7BtH.pdf",
"Wyvfq": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20*-Wyvf(q.pdf",
"657T8hj": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20657%7DT8h(_j.pdf",
"HhfgmtbP": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20Hhfgmtb%7DP.pdf",
"kQWakyx": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20kQWa%7Bky%5E_x.pdf",
"yxjSqQh": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%23(%7Bxj%3ESqQh.pdf",
"VYB68u6cP": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/3%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20VYB68u6cP.pdf",
"uLqbmdd6": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20uLq%7Dbmdd)6.pdf",
"?o8XJLa": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%7B%3Fo8XJ%5ELa..pdf",
"CcvYg!ctE": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20CcvYg!c%3EtE.pdf",
"t9x!KUqX": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20t%3C9x!KU.qX.pdf",
"MPfNGcH": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%7BMPfN%5BGc-H.pdf",
"RuNfpP3": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20RuNf%3B%3C%7BP3.pdf",
"7!Bmoqmlwr": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%207!Bmo%5Bm-%5Dr.pdf",
"7Hahs!qTFd": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%207Hahs!qTFd.pdf",
"DgWtsBcUST": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20D(WtsBUST.pdf",
"tCai3qmpbW": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20.C%25_3%5Bm%3CbW.pdf",
"asrkyeyUpr": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20a%3Er%23yeyUp%2c.pdf",
"BydHukmgrS": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/4%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20B%7B*H%7Dkm(rS.pdf",
"6Y?a58@CT?": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%206Y%3Fa58@CT%3F.pdf",
"$mN!FRatp6": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20$mN!FRatp6.pdf",
"MQg2YycqCx": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20MQg2YyqCx.pdf",
"b45cgDiYt8": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20b45gD_Y.8.pdf",
"pYz5TwmN@J": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20pYz5T%5D%3BN@J.pdf",
"4BHerVQhRe": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%204BHerVQhRe.pdf",
"9fSBsgEwxR": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%209%5ESB%3E(E%5DxR.pdf",
"pmECMhyNL2": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%3CmECMh%7BNL2.pdf",
"ryUuJvz7C!": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%2cyU%7DJvz7C!.pdf",
"wqQUp@tqPc": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%5DqQUp@.qP.pdf",
"!$AtfsqJqq": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20!$A.%5E%3EqJ%5Bq.pdf",
"QlVRXfsqws": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/5%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20Q-VRX%5Esqws.pdf",
"tPCRftWPh3": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20tPCRf.WPh3.pdf",
"rWEDBzal!U": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%2cWEDBza-!U.pdf",
"gN8m@fBSSZ": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20(N8m@fBSSZ.pdf",
"T2qP8bnFbR": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20T2qP8bnFbR.pdf",
"u9sbfJTiuw": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%7D9%3Eb%5EJT_%7D%5D.pdf",
"6uct@XpECq": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%206%7Dt@XpECq.pdf",
"a$d@ddEBf4": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%25$*@ddEB%5E4.pdf",
"v4ZmrVsGtu": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20v4ZmrV%3EG.%7D.pdf",
"PK@bp6asad": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20PK@%3C6%25%3Ea*.pdf",
"wYXbeakAAb": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%5DYXbeakAAb.pdf",
"Zli@M!dcYK": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20Z-_@M!*cYK.pdf",
"hLk6fXK2Hp": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/6%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20hL%236fXK2H%3C.pdf",
"cUTC55rzmN": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20cUTC55%2czmN.pdf",
"jbfVDmKb3h": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20BtH4TAju8m.pdf",
"D?RUt7lVcq": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20D%3FRUt7-V%5B.pdf",
"BtH4TAju8m": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20BtH4TAju8m.pdf",
"Hq9CyhRfhW": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20Hq9C%7B)R%5EhW.pdf",
"qGLZdZjuKl": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20qGLZdZj%7DK-.pdf",
"UCl8flhtGY": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20UC-8%5E-)tGY.pdf",
"wqseku@6w?": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20w%5B%3Eeku@6w%3F.pdf",
"cNkwNGawmp": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20Nk%5DNGaw%3Bp.pdf",
"rZgWVdK395": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%2cZ(WV*K395.pdf",
"C5?EePG6mN": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20C5%3FEePG6mN.pdf",
"d@DKXPVpmt": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/7%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20d@DKXPVp%3B..pdf",
"!dqYPCkhls": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20!dqYPCkh-s.pdf",
"p2pm3hroFt": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%3C2%3C%3B3h%2coFt.pdf",
"yMTVLJm@wc": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20yMTVLJ%3B@%5Dc.pdf",
"updqud5Ksy": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20updq%7Dd5K%3E%7B.pdf",
"HmbSK?KstB": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20H%3BSK%3FKstB.pdf",
"$Zr!CD!6cy": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20$Z%2c!CD!6y.pdf",
"yKwJtqrAhk": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20yKwJ.%5B%2cA)%23.pdf",
"eUUpFhN$$R": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20eUU%3CF)N$$R.pdf",
"@q7bl$fUnS": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20@q7b-$fUnS.pdf",
"osUcottNmz": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20osUcot.N%3Bz.pdf",
"gFMq5VMYEh": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20gFM%5B5VMYE).pdf",
"K7Qgd6fENQ": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20K7Qgd6fENQ.pdf",
"Dcfh3pVY?u": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%203$h8%7DHbpo(.pdf",
"Lr68TaZT@G": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20Lr68TaZT@G.pdf",
"3$h8uHbpog": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%203$h8%7DHbpo(.pdf",
"Qm88kZhWLY": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20Q%3B88%23Z)WLY.pdf",
"ZqqdarHBmb": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/8%20partia/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20Z%5Bq*a%2cHBm.pdf",
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
