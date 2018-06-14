module.exports = {
    ok: (res, data) => {
        return res.status(200).json({
            success: true,
            data: data
        });
    },
    error: (res, err) => {
        return res.status(500).json({
            success: false,
            error: err
        });
    },
    unauthorized: (res) => {
        return res.status(404).json({
            success: false,
            error:  errors
        });
    }
}