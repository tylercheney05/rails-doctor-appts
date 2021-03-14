require "test_helper"

class AppointmentsControllerTest < ActionDispatch::IntegrationTest
<<<<<<< HEAD
  # test "the truth" do
  #   assert true
  # end
=======
  test "should get index" do
    get appointments_index_url
    assert_response :success
  end

  test "should get show" do
    get appointments_show_url
    assert_response :success
  end

  test "should get new" do
    get appointments_new_url
    assert_response :success
  end

  test "should get edit" do
    get appointments_edit_url
    assert_response :success
  end
>>>>>>> made changes to appointments
end
