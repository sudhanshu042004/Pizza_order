import { ORDER_STATUS, OrderStatus } from '@/types/PizzaOrder';
import { Clock, CheckCircle, Package, ChefHat, Truck, X } from 'lucide-react'

const StatusBadge = ({ status }: { status: OrderStatus }) => {
    const getStatusConfig = (status: OrderStatus) => {
        switch (status) {
            case ORDER_STATUS[3]:
                return {
                    color: 'bg-green-100 text-green-800 border-green-200',
                    icon: CheckCircle,
                    dot: 'bg-green-500'
                };
            case ORDER_STATUS[1]:
                return {
                    color: 'bg-blue-100 text-blue-800 border-blue-200',
                    icon: ChefHat,
                    dot: 'bg-blue-500'
                };
            case ORDER_STATUS[2]:
                return {
                    color: 'bg-purple-100 text-purple-800 border-purple-200',
                    icon: Truck,
                    dot: 'bg-purple-500'
                };
            case ORDER_STATUS[0]:
                return {
                    color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
                    icon: Clock,
                    dot: 'bg-yellow-500'
                };
            case ORDER_STATUS[4]:
                return {
                    color: 'bg-red-100 text-red-800 border-red-200',
                    icon: X,
                    dot: 'bg-red-500'
                };
            default:
                return {
                    color: 'bg-gray-100 text-gray-800 border-gray-200',
                    icon: Package,
                    dot: 'bg-gray-500'
                };
        }
    };

    const config = getStatusConfig(status);

    return (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${config.color}`}>
            <div className={`w-2 h-2 rounded-full ${config.dot}`}></div>
            {status}
        </div>
    );
};

export default StatusBadge
