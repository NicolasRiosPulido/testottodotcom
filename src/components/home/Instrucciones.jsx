import { PieChartOutline, CalendarOutline, SwapHorizontalOutline, OptionsOutline } from 'react-ionicons';
import styles from '../../styles/Home.module.css';

import Descargar from '../general/Descargar';

const Instrucciones = () => {
    return (
        <div className={styles.Instrucciones}>
            <div className={`secction_body row_center`}>
                <div className={styles.InstruccionesCardFirst}>
                    <div className={styles.InstruccionesCard}>
                        <div className={`c_t ${styles.iconContainer}`}>
                            <PieChartOutline
                                color={'#FFF'}
                                height="40px"
                                width="40px"
                            />
                        </div>
                        <p >
                            Balance consolidado
                        </p>
                        <p>
                            Balance de ingresos y gastos en teimpo real
                        </p>
                    </div>
                    <div className={styles.InstruccionesCard}>
                        <div className={`c_t ${styles.iconContainer}`}>
                            <SwapHorizontalOutline
                                color={'#FFF'}
                                height="35px"
                                width="35px"
                            />
                        </div>
                        <p >Transacciones</p>
                        <p>
                            En el registro de transacciones encuentras los movimientos de todas tus cuentas en un solo lugar.
                        </p>
                    </div>
                </div>
                <img
                    src={'https://avatars.otto-app.com/dotcom/home/iPhoneC.png'}
                    alt="iphon descripcion"
                    className={styles.instructionPhine}
                />
                <div>
                    <div className={styles.InstruccionesCard}>
                        <div className={`c_t ${styles.iconContainer}`}>
                            <CalendarOutline
                                color={'#FFF'}
                                height="30px"
                                width="30px"
                            />
                        </div>
                        <p >Movimientos programados</p>
                        <p>
                            Automatiza moviemientos programados para que sean incluidos en tus movimienots todos los meses
                        </p>
                    </div>
                    <div className={styles.InstruccionesCard}>
                        <div className={`c_t ${styles.iconContainer}`}>
                            <OptionsOutline
                                color={'#FFF'}
                                height="35px"
                                width="35px"
                            />
                        </div>
                        <p >Filtra tus movimientos</p>
                        <p>
                            Filtros que te ayudan a ver tus transacciones por mes, tipo y categoría.
                        </p>
                    </div>
                </div>
            </div>
            <div className={`secction_body row_center ${styles.InstructionsBtnCon}`}>
                <Descargar />
            </div>
        </div>
    )
}

export default Instrucciones
