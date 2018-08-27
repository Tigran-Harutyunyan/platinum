
import axios from 'axios';

const customerApi = {
    getTaskCustomerDetails(taskId) {
        return api.get(`admin/operations/${taskId}/customer`).then(res => {
            return customerMiddleware.fromBackEnd.parseCustomerData(res.body.data);
        });
    }
};

export default {
    customerApi
};