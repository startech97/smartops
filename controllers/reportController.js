
exports.getReportPage = async(req,res) => {

    res.render('report/report', {
        isReport: true,
        
    })
}