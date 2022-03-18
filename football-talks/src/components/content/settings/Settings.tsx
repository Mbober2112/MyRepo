import { reduxForm, Field } from 'redux-form';
import c from './Settings.module.css';

const SettingsForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                Username: <Field name={'username'} component={'input'} value={'Bob'} type={'text'} />
            </div>
            <div>
                Status: <Field name={'status'} component={'input'} placeholder={'Some status'} />
            </div>
            <div>
                Club: <Field name={'club'} component={'select'} placeholder={'3'} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                </Field>
            </div>
            <div>
                <button>Изменить</button>
            </div>
        </form>
    )
}

const SettingsReduxForm = reduxForm({ form: 'settings' })(SettingsForm);


const Settings = (props: any) => {
    return(
        <div>
            <SettingsReduxForm />
        </div>
    )
}

export default Settings;