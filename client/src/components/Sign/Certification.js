import {
  SignItem,
  SignLabel,
  ConfirmButton,
  DisabledConfirmButton
} from '../../styles/signStyle';

const Certification = ({ form, setForm }) => {
  function onClickCertification() {
    const { IMP } = window;
    IMP.init('imp04631732');

    IMP.certification(
      {
        merchant_uid: `mid_${new Date().getTime()}`,
        m_redirect_url: '/signup',
        popup: false
      },
      (res) => {
        if (res.success) {
          setForm({ ...form, certification: true });
          alert('본인인증 성공');
        } else {
          alert(`${res.error_msg}`);
        }
      }
    );
  }

  return (
    <SignItem>
      <SignLabel>본인인증</SignLabel>

      {form.certification ? (
        <DisabledConfirmButton disabled>인증완료</DisabledConfirmButton>
      ) : (
        <ConfirmButton type="button" onClick={onClickCertification}>
          인증하기
        </ConfirmButton>
      )}
    </SignItem>
  );
};

export default Certification;
